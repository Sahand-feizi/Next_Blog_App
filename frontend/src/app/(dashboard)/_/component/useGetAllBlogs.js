import { useAuth } from '@/context/AuthContext'
import { getBlogsApi } from '@/services/blogServices'
import { useQuery } from '@tanstack/react-query'

function useGetAllBlogs(queries) {
  const { user } = useAuth()

  const { isPending: isLoading, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogsApi()
  })
  
  const { blogs = [] } = data || {}
  const myBlogs = blogs?.filter(blog => blog?.author?._id == user?._id)
  const myLikedBlogs = blogs?.filter(blog => blog?.isLiked)
  const myBookmarkedBlogs = blogs?.filter(blog => blog?.isBookmarked)

  return { blogs, myBlogs, myLikedBlogs, myBookmarkedBlogs }
}

export default useGetAllBlogs
