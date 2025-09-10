export async function getBlogsApi(queries, options) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`, options)
    const { data } = await res.json()
    const { posts: blogs } = data || {};
    return blogs
}