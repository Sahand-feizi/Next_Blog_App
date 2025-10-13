import { getBlogByIdApi } from "@/services/blogServices";
import Breadcrumbs from "@/ui/Breadcrumbs"
import LoadingSpinner from "@/ui/LoadingSpinner";
import EditBlogForm from "app/(dashboard)/_/component/EditBlogForm";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { blogId } = params;

    try {
        const { post: blog } = await getBlogByIdApi(blogId)
        return {
            title: blog.title,
        }
    } catch (error) {
        Promise.reject(error)
    }
}

function EditBlogPage({ params }) {
    const { blogId } = params;

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
            path: '/profile/blogs',
            title: 'بلاگ ها',
            active: false
        },
        {
            id: 4,
            path: `/profile/blogs/edit/${blogId}`,
            title: 'آپدیت بلاگ',
            active: true
        },
    ]
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='space-y-2'>
                <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>ایجاد بلاگ</h2>
                <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                    ایجاد بلاگ جدید و انتخاب عکس و ...
                </p>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
                <EditBlogForm blogId={blogId} />
            </Suspense>
        </div>
    )
}

export default EditBlogPage
