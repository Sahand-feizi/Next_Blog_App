import { getCategoryByIdApi } from "@/services/categoriesServices";
import Breadcrumbs from "@/ui/Breadcrumbs"
import LoadingSpinner from "@/ui/LoadingSpinner";
import EditCategoryForm from "app/(dashboard)/_/component/EditCategoryForm";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { categoryId } = params;

    try {
        const { category } = await getCategoryByIdApi(categoryId)
        
        return {
            title: category.title,
        }
    } catch (error) {
        Promise.reject(error)
    }
}

function EditCategoryPage({ params }) {
    const { categoryId } = params;

    const breadcrumbs = [
        {
            id: 1,
            path: '/',
            title: 'خانه',
            active: false
        },
        {
            id: 2,
            path: '/profile',
            title: 'داشبورد',
            active: false
        },
        {
            id: 3,
            path: '/profile/categories',
            title: 'دسته بندی ها',
            active: false
        },
        {
            id: 4,
            path: `/profile/categories/edit/${categoryId}`,
            title: 'آپدیت دسته بندی',
            active: true
        },
    ]
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='space-y-2'>
                <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>آپدیت دسته بندی</h2>
                <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                    آپدیت دسته بندی و انتخاب عنوان جدید و ...
                </p>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
                <EditCategoryForm categoryId={categoryId} />
            </Suspense>
        </div>
    )
}

export default EditCategoryPage
