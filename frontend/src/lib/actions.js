'use server'

import { createBlogApi } from "@/services/blogServices"
import { createCommentApi } from "@/services/commentServices"
import setCookiesOnReq from "@/utils/setCookiesOnReq"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function createComment(prevState, { formData, parentId, blogId }) {
    const cookiesStore = cookies()

    const commentBodyApi = {
        text: formData.get('text'),
        parentId,
        postId: blogId
    }

    try {
        const options = setCookiesOnReq(cookiesStore)
        const { message } = await createCommentApi(commentBodyApi, options)
        revalidatePath("/blogs/[blogSlug]")
        return {
            message,
        }
    } catch (err) {
        return {
            error: err?.response?.data?.message
        }
    }
}