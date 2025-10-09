import SearchInput from '@/ui/SearchInput'
import SelectInput from '@/ui/SelectInput'
import CategoriesList from 'app/(blog)/_components/CategoriesList'
import FilterForm from 'app/(blog)/_components/FilterForm'
import React from 'react'

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

function DashboardSearchBar() {
    return (
        <div className='flex relative flex-row gap-2'>
            <SearchInput />
            <FilterForm className={'md:flex-row md:w-full'}>
                <SelectInput
                    optionClassName={'md:absolute z-50 md:top-12 z-50 md:w-full'}
                    title='مرتب سازی' name={'sort'}
                    options={sortOptions}
                />
                <CategoriesList optionClassName={'md:absolute z-50 md:top-12 md:w-full'} />
            </FilterForm>
        </div>
    )
}

export default DashboardSearchBar
