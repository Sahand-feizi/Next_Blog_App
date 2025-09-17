import { getAllCategoriesApi } from '@/services/categoriesServices'
import SelectInput from '@/ui/SelectInput'
import React from 'react'

async function CategoriesList() {
    const { categories } = await getAllCategoriesApi()

    return (
        <SelectInput
            name={'categorySlug'}
            title={'دسته بندی'}
            options={categories}
        />
    )
}

export default CategoriesList
