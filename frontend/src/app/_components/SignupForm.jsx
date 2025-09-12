"use client"
import { useAuth } from '@/context/AuthContext'
import Button from '@/ui/Button'
import LoadingSpinner from '@/ui/LoadingSpinner'
import TextField from '@/ui/TextField'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import * as yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const signUpValidation = yup.object({
    name: yup.string().max(30, 'نام و نام خانوادگی باید کمتر از 30 حرف باشد')
        .min(8, 'نام و نام خانوادگی باید بیشتر از 8 حرف باشد').required('نام و نام خانوادگی الزامی است'),
    email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    password: yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور باید شامل 8 حرف باشد، حروف کوچک، حروف بزرگ، اعداد، و یک حرف مخصوص مثل * باشد"
    ).required('رمز عبور الزامی است')
}).required()

function SignupForm() {
    const { signup, isLoading } = useAuth()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signUpValidation,
        onSubmit: async (values) => {
            await signup(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-4 z-20'>
            <TextField
                name='name'
                formik={formik}
                labelValue='نام و نام خانوادگی'
                isRequired
            />
            <TextField
                name='email'
                formik={formik}
                labelValue='ایمیل'
                isRequired
                dir='ltr'
            />
            <TextField
                name='password'
                formik={formik}
                labelValue='رمز عبور'
                type='password'
                isRequired
                dir='ltr'
            />
            <Button className={'w-full font-bold flex justify-center z-20'} type='submit' variant='white'>
                {
                    isLoading ?
                        <LoadingSpinner color='#000' width='60' height='24' /> :
                        'ثبت نام'
                }
            </Button>
            <p className='text-secondary-200 text-base z-20'>
                اگر ثبت نام کرده اید؟
                <Link className='text-secondary-0 underline' href='/signin'>ورود</Link>
            </p>
        </form>
    )
}

export default SignupForm
