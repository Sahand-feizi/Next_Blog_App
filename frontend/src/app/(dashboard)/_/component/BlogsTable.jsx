'use client'
import { getBlogsApi } from '@/services/blogServices'
import Table from '@/ui/Table'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import React from 'react'
import BlogsTableRow from './BlogsTableRow'
import Pagination from './Pagination'

async function BlogsTable({ queries }) {
    const { blogs, totalPages } = await getBlogsApi(queries)
 
    if(blogs.length ==0){
        return <p className='text-base py-4 text-secondary-400 font-normal'>بلاگی یافت نشد</p>
    }

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
            <Pagination totalPages={totalPages}/>
        </div>
    )
}

export default BlogsTable
