import { getBlogsApi } from '@/services/blogServices'
import Table from '@/ui/Table'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import { cookies } from 'next/headers'
import React from 'react'
import BlogsTableRow from './BlogsTableRow'

async function BlogsTable({ queries }) {
    const cookieStore = cookies()
    const options = setCookiesOnReq(cookieStore)
    const blogs = await getBlogsApi(queries, options)

    return (
        <div className="grid">
            <Table>
                <Table.Header>
                    <td>#</td>
                    <td>عنوان</td>
                    <td>متن کوتاه</td>
                    <td>دسته بندی</td>
                    <td>تعداد لایک</td>
                    <td>تعداد نظرات</td>
                    <td>زمان مطالعه</td>
                    <td>نویسنده</td>
                    <td>لایک شده</td>
                    <td>بوکمارک شده</td>
                    <td>نوع</td>
                    <td>زمان ایجاد</td>
                    <td>آخرین آپدیت</td>
                    <td>عملیات ها</td>
                </Table.Header>
                <Table.Body>
                    {
                        blogs.map((blog, index) => (
                            <BlogsTableRow key={blog._id} index={index} blog={blog} />
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default BlogsTable
