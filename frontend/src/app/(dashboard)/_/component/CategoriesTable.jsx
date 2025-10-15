import Table from '@/ui/Table'
import setCookiesOnReq from '@/utils/setCookiesOnReq'
import { cookies } from 'next/headers'
import React from 'react'
import { getAllCategoriesApi } from '@/services/categoriesServices'
import CategoriesTableRow from './CategoriesTableRow'

async function CategoriesTable() {
    const cookieStore = cookies()
    const options = setCookiesOnReq(cookieStore)
    const { categories } = await getAllCategoriesApi(options)

    if (categories?.length == 0) {
        return <p className='text-base py-4 text-secondary-400 font-normal'>دسته بندی یافت نشد</p>
    }

    return (
        <div className="grid">
            <Table className={'!min-w-[62rem]'}>
                <Table.Header>
                    <td>#</td>
                    <td>عنوان</td>
                    <td>عنوان انگلیسی</td>
                    <td>متن کوتاه</td>
                    <td>اسلاگ</td>
                    <td>تاریخ ثبت </td>
                    <td>آخرین آپدیت</td>
                    <td>عملیات ها</td>
                </Table.Header>
                <Table.Body>
                    {
                        categories.map((category, index) => (
                            <CategoriesTableRow key={category._id} index={index} category={category} />
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default CategoriesTable
