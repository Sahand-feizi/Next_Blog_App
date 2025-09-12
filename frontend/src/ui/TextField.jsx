import React from 'react'

function TextField({
    name,
    labelValue,
    isRequired,
    type = 'text',
    dir = 'rtl',
    formik,
    className,
    ...rest
}) {
    return (
        <div className='flex flex-start flex-col gap-1 z-20'>
            <label htmlFor={name} className={`text-sm text-secondary-300 font-bold z-20`}>
                {labelValue}
                {!isRequired && '(اختیاری)'}
            </label>
            <input
                type={type}
                dir={dir}
                name={name}
                {...formik.getFieldProps(name)}
                className={`Text_Field z-20 ${formik.errors[name] && formik.touched[name] && 'Error_Input'} ${className}`}
                {...rest}
            />
            {formik.errors[name] &&
                formik.touched[name] &&
                <p className='text-error text-sm font-normal'>{formik.errors[name]}</p>}
        </div>
    )
}

export default TextField
