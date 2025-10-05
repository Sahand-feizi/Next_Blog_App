import { useAuth } from '@/context/AuthContext'
import { getBlogsApi } from '@/services/blogServices'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

function useGetAllBlogs(searchParams) {
  const { user } = useAuth()
  const queries = queryString.stringify(searchParams)

  const { isPending: isLoading, data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogsApi(queries)
  })

  const myBlogs = blogs?.filter(blog => blog?.author?._id == user?._id)
  const myLikedBlogs = blogs?.filter(blog => blog?.isLiked)
  const myBookmarkedBlogs = blogs?.filter(blog => blog?.isBookmarked)

  return { blogs, myBlogs, myLikedBlogs, myBookmarkedBlogs }
}

export default useGetAllBlogs
