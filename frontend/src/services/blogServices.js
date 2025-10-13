import http from "./httpServices";

export async function getBlogsApi(queries, options) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
        { ...options, credentials: 'include' }
    )
    const { data } = await res.json()
    const { posts: blogs, totalPages } = data || {};
    return { blogs, totalPages }
}

export async function getBlogBySlugApi(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`)
    const { data } = await res.json()
    const { post: blog } = data || {};
    return blog
}

export async function likeBlogsApi(blogId) {
    return await http.post(`/post/like/${blogId}`).then(({ data }) => data.data)
}

export async function bookmarkBlogsApi(blogId) {
    return await http.post(`/post/bookmark/${blogId}`).then(({ data }) => data.data)
}

export async function createBlogApi(data, options) {
    return await http.post(`/post/create`, data, options).then(({ data }) => data.data)
}