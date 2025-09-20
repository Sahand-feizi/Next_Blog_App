import LoadingSpinner from '@/ui/LoadingSpinner'
import SearchInput from '@/ui/SearchInput'
import SelectInput from '@/ui/SelectInput'
import CategoriesList from 'app/(blog)/_components/CategoriesList'
import FilterForm from 'app/(blog)/_components/FilterForm'
import React, { Suspense } from 'react'

const sortOptions = [
    {
        _id: 1,
        slug: 'latest',
        title: 'جدید ترین ها'
    },
    {
        _id: 2,
        slug: 'earliest',
        title: 'قدیمی ترین ها'
    },
    {
        _id: 3,
        slug: 'popular',
        title: 'محبوب ترین ها'
    }
]

export const metadata = {
    title: 'بلاگ ها'
}

function layout({ children }) {
    return (
        <div className='grid grid-cols-12 gap-4 grid-rows-1 container'>
            <div className='flex relative flex-row gap-4 md:gap-0 md:flex-col col-span-12 
            md:col-span-4 lg:col-span-3 md:space-y-2 h-full pt-10 max-h-full
            scrollbar scrollbar-thumb-gray-900 w-full p-1 scrollbar-track-gray-100'>
                <SearchInput />
                <FilterForm>
                    <SelectInput title='مرتب سازی' name={'sort'} options={sortOptions} />
                    <CategoriesList />
                </FilterForm>
            </div>
            <div className='col-span-12 md:pt-10 md:col-span-8 lg:col-span-9'>
                <Suspense fallback={<LoadingSpinner />}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}

export default layout
