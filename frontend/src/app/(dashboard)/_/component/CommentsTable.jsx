import Table from '@/ui/Table'
import React from 'react'
import { getAllCommentApi } from '@/services/commentServices'
import CommentsTableRow from './CommentsTableRow'

async function CommentsTable() {
    const { comments } = await getAllCommentApi()
 
    if(comments.length ==0){
        return <p className='text-base py-4 text-secondary-400 font-normal'>بلاگی یافت نشد</p>
    }

    return (
        <div className="grid">
            <Table className={'!min-w-[70rem]'}>
                <Table.Header>
                    <td>#</td>
                    <td>عکس کاربر</td>
                    <td>نام</td>
                    <td>متن</td>
                    <td>وضعیت</td>
                    <td>زمان ایجاد</td>
                    <td>آخرین آپدیت</td>
                    <td>عملیات ها</td>
                </Table.Header>
                <Table.Body>
                    {
                        comments.map((comment, index) => (
                            <CommentsTableRow key={comment._id} index={index} comment={comment} />
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default CommentsTable
