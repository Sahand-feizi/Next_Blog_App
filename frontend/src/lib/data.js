import { getAllUsersApi } from "@/services/authServices";
import { getBlogsApi } from "@/services/blogServices";
import { getAllCommentApi } from "@/services/commentServices";
import setCookiesOnReq from "@/utils/setCookiesOnReq";
import { cookies } from "next/headers";

export async function fetchCardData() {
    const cookieStore = cookies();
    const options = setCookiesOnReq(cookieStore)

    try {
        const data = await Promise.all([
            getBlogsApi(),
            getAllCommentApi(options),
            getAllUsersApi(options)
        ])

        const numOfBlogs = data[0].blogs.length;
        const numOfComments = data[1].commentsCount;
        const numOfUsers = data[2].users.length;

        return {
            numOfBlogs,
            numOfComments,
            numOfUsers
        }
    } catch (error) {
        throw new Error('خطا در گرفتن اطلاعات')
    }
}