'use client'
import Button from '@/ui/Button'
import LoadingSpinner from '@/ui/LoadingSpinner'
import TextField from '@/ui/TextField'
import { useFormik } from 'formik'
import React from 'react'
import { BackButton } from './Buttons'
import * as yup from 'yup'
import useCreateCategory from './useCreateCategory'
import { useRouter } from 'next/navigation'

const categorySchema = yup.object({
    title: yup.string()
        .min(3, 'عنوان باید بیشتر از 3 کاراکتر باشد')
        .max(12, 'عنوان باید کمتر از 12 کاراکتر باشد')
        .required('این فیلد اجباری است'),
    englishTitle: yup.string()
        .min(3, 'عنوان انگلیسی باید بیشتر از 3 کاراکتر باشد')
        .max(12, 'عنوان انگلیسی باید کمتر از 12 کاراکتر باشد')
        .required('این فیلد اجباری است'),
    description: yup.string()
        .min(10, 'توضیحات باید بیشتر از 10 کاراکتر باشد')
        .max(30, 'توضیحات باید کمتر از 20 کاراکتر باشد')
        .required('این فیلد اجباری است')
}).required()

function CreateAndEditCategoryForm({ blog }) {
    const initialValues = {
        title: '',
        englishTitle: '',
        description: '',
    }
    const router = useRouter()
    const { isCreating, createCategory } = useCreateCategory()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: categorySchema,
        onSubmit: async (data) => {
            await createCategory(data, {
                onSuccess: () => {
                    router.push('/profile/categories')
                }
            })
        }
    })
    const isEditing = false;

    return (
        <form onSubmit={formik.handleSubmit} className='grid grid-cols-12 mt-4 gap-4 w-full'>
            <TextField
                name={'title'}
                labelValue={'عنوان'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <TextField
                name={'englishTitle'}
                labelValue={'متن انگلیسی'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <TextField
                name={'description'}
                labelValue={'توضیحات'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <div className="col-span-12 grid grid-cols-12 gap-3">
                <Button
                    type={'submit'}
                    variant={'white'}
                    className={`font-medium col-span-12 sm:col-span-6 lg:col-span-3`}
                >
                    {
                        isCreating || isEditing ?
                            <LoadingSpinner height='30' width='30' color='#000' /> :
                            blog ? 'آپدیت پست' : 'ایجاد پست جدید'
                    }
                </Button>
                <BackButton className={'font-medium col-span-12 sm:col-span-6 lg:col-span-3'} />
            </div>
        </form>
    )
}

export default CreateAndEditCategoryForm
