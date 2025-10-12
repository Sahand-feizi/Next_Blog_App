import React from 'react'

function FormikSelectInput({
    name,
    labelValue,
    isRequired,
    dir = 'rtl',
    formik,
    containerClassName,
    className,
    options,
    ...rest
}) {
    return (
        <div className={`flex flex-start flex-col gap-1 z-20 ${containerClassName}`}>
            <label htmlFor={name} className={`text-sm text-secondary-300 font-bold z-20`}>
                {labelValue}
                {!isRequired && '(اختیاری)'}
            </label>
            <select
                name={name}
                id={name}
                dir={dir}
                {...formik.getFieldProps(name)}
                className={`Text_Field z-20 ${formik.errors[name] && formik.touched[name] && 'Error_Input'} ${className}`}
                {...rest}
            >
                {
                    options.map(item => (
                        <option className='bg-secondary-950 text-secondary-0' key={item._id} value={item.value}>
                            {item.title}
                        </option>
                    ))
                }
            </select>
            {formik.errors[name] &&
                formik.touched[name] &&
                <p className='text-error text-sm font-normal'>{formik.errors[name]}</p>}
        </div>
    )
}

export default FormikSelectInput
