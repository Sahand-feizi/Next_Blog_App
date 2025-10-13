import React from 'react'
import CreateBlogForm from './CreateBlogForm'
import { getBlogByIdApi } from '@/services/blogServices'

async function EditBlogForm({ blogId }) {
    const { post: blog } = await getBlogByIdApi(blogId)

    return (
        <div>
            <CreateBlogForm blog={blog} />
        </div>
    )
}

export default EditBlogForm
