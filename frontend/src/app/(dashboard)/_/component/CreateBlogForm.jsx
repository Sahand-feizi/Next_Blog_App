"use client"
import Button from '@/ui/Button'
import FileInput from '@/ui/FileInput'
import TextArea from '@/ui/TextArea'
import TextField from '@/ui/TextField'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { BackButton } from './Buttons'
import Image from 'next/image'
import useGetCategories from './useGetCategories'
import FormikSelectInput from '@/ui/FormikSelectInput'
import { useCreateBlog } from './useCreateBlog'
import LoadingSpinner from '@/ui/LoadingSpinner'

const initialValues = {
    title: '',
    briefText: '',
    text: '',
    category: '',
    readingTime: '',
    slug: '',
    coverImage: ''
}

const createNewBlogValidation = yup.object({
    title: yup.string().required('این فیلد ضروری است')
        .min(5, 'این فیلد باید بیشتر از 5 کاراکتر باشد')
        .max(15, 'این فیلد باید کمتر از 15 کاراکتر باشد'),
    briefText: yup.string().required('این فیلد ضروری است')
        .min(10, 'این فیلد باید بیشتر از 10 کاراکتر باشد')
        .max(25, 'این فیلد باید کمتر از 25 کاراکتر باشد'),
    text: yup.string().required('این فیلد ضروری است')
        .min(10, 'این فیلد باید بیشتر از 10 کاراکتر باشد')
        .max(100, 'این فیلد باید کمتر از 100 کاراکتر باشد'),
    category: yup.string().required('این فیلد ضروری است'),
    readingTime: yup.number().required('این فیلد ضروری است'),
    slug: yup.string().required('این فیلد ضروری است'),
    coverImage: yup.mixed().required('این فیلد ضروری است'),
}).required()

function CreateBlogForm() {
    const { createNewBlog, isCreating } = useCreateBlog()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: createNewBlogValidation,
        onSubmit: async (data) => {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key])
            }

            await createNewBlog(formData)
        }
    })
    const [coverImage, setCoverImage] = useState(null)
    const { selectCategories } = useGetCategories()

    return (
        <form onSubmit={formik.handleSubmit} className='grid grid-cols-12 mt-4 gap-4 w-full'>
            <div className="relative col-span-12 min-h-[13rem]">
                <Image
                    src={coverImage || '/images/noImage.jpg'}
                    fill
                    alt='coverImage'
                    className='object-cover'
                />
                <FileInput
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    labelValue={'عکس خود را آپلود کنید'}
                    name={'coverImage'}
                    isRequired
                    onChange={(event) => {
                        const file = event.target.files[0];
                        formik.setFieldValue('coverImage', file);
                        setCoverImage(URL.createObjectURL(file));
                    }}
                />
            </div>
            <TextField
                name={'title'}
                labelValue={'عنوان'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <TextField
                name={'briefText'}
                labelValue={'متن کوتاه'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <TextArea
                maxLength={100}
                value={formik.values.text}
                setValue={(value) => formik.setFieldValue("text", value)}
                name={'text'}
                labelValue={'متن بلاگ'}
                containerClassName={'!col-span-12 h-full row-span-2 sm:!col-span-6'}
                className={'!h-full border-secondary-400 focus:!text-secondary-0'}
                isRequired
            />
            <FormikSelectInput
                options={[{ _id: 1, value: 1, title: 'فیلد خود را انتخاب کنید' }, ...selectCategories]}
                name={'category'}
                labelValue={'دسته بندی'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <TextField
                name={'readingTime'}
                labelValue={'زمان مطالعه'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <TextField
                name={'slug'}
                labelValue={'اسلاگ ها'}
                formik={formik}
                containerClassName={'!col-span-12 sm:!col-span-6'}
                isRequired
            />
            <Button type={'submit'} variant={'white'} className={'font-medium col-span-12 sm:col-span-6 lg:col-span-3'}>
                {
                    isCreating ?
                        <LoadingSpinner height='30' width='30' color='#000' /> :
                        'ایجاد پست جدید'
                }
            </Button>
            <BackButton className={'font-medium col-span-12 sm:col-span-6 lg:col-span-3'} />
        </form>
    )
}

export default CreateBlogForm
