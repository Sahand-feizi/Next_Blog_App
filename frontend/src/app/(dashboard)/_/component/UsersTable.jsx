import { getBlogsApi } from '@/services/blogServices'
import Table from '@/ui/Table'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import { cookies } from 'next/headers'
import React from 'react'
import BlogsTableRow from './BlogsTableRow'
import Pagination from './Pagination'
import UsersTableRow from './UsersTableRow'
import { getAllUsersApi } from '@/services/authServices'

async function UsersTable() {
    const cookieStore = cookies()
    const options = setCookiesOnReq(cookieStore)
    const { users } = await getAllUsersApi(options)
    console.log(users);

    if (users?.length == 0) {
        return <p className='text-base py-4 text-secondary-400 font-normal'>کاربری یافت نشد</p>
    }

    return (
        <div className="grid">
            <Table className={'!min-w-[50rem]'}>
                <Table.Header>
                    <td>#</td>
                    <td>عکس</td>
                    <td>نام</td>
                    <td>ایمیل</td>
                    <td>تاریخ ثبت نام</td>
                    <td>آخرین آپدیت</td>
                </Table.Header>
                <Table.Body>
                    {
                        users.map((user, index) => (
                            <UsersTableRow key={user._id} index={index} user={user} />
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default UsersTable
