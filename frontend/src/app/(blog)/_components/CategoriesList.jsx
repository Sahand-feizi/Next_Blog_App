import { getAllCategoriesApi } from '@/services/categoriesServices'
import SelectInput from '@/ui/SelectInput'
import React from 'react'

async function CategoriesList({optionClassName}) {
    const { categories } = await getAllCategoriesApi()

    return (
        <SelectInput
            name={'categorySlug'}
            title={'دسته بندی'}
            options={categories}
            optionClassName={optionClassName}
        />
    )
}

export default CategoriesList
