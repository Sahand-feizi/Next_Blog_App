import React from 'react'
import CreateAndEditCategoryForm from './CreateAndEditCategoryForm'
import { getCategoryByIdApi } from '@/services/categoriesServices'

async function EditCategoryForm({ categoryId }) {
    const { category } = await getCategoryByIdApi(categoryId)

    return (
        <div>
            <CreateAndEditCategoryForm category={category}/>
        </div>
    )
}

export default EditCategoryForm
