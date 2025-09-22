export async function getBlogsApi(queries, options) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`, options)
    const { data } = await res.json()
    const { posts: blogs } = data || {};
    return blogs
}

export async function getBlogBySlugApi(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`)
    const { data } = await res.json()
    const { post: blog } = data || {};
    return blog
}