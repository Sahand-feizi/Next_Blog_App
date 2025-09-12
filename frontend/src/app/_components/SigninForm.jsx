"use client"
import { useAuth } from '@/context/AuthContext'
import Button from '@/ui/Button'
import LoadingSpinner from '@/ui/LoadingSpinner'
import TextField from '@/ui/TextField'
import { useFormik } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}

const signinValidation = yup.object({
    email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    password: yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور باید شامل 8 حرف باشد، حروف کوچک، حروف بزرگ، اعداد، و یک حرف مخصوص مثل * باشد"
    ).required('رمز عبور الزامی است')
}).required()

function SigninForm() {
    const { isLoading, signin } = useAuth()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signinValidation,
        onSubmit: async (values) => {
            await signin(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-4 z-20'>
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
                        'ورود'
                }
            </Button>
            <p className='text-secondary-200 text-base z-20'>
                اگر ثبت نام نکرده اید؟
                <Link className='text-secondary-0 underline' href='/signup'>ثبت نام</Link>
            </p>
        </form>
    )
}

export default SigninForm
