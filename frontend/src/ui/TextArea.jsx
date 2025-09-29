import React from 'react'

function TextArea({ value, setValue, name, labelValue, maxLength }) {
  const isError = value.length > maxLength;

  return (
    <div className='flex flex-col gap-2 relative'>
      <label className='text-sm text-secondary-300 font-bold z-20' htmlFor={name}>{labelValue}</label>
      <textarea
        name={name}
        id={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={`Text_Area ${isError && 'bg-red-600/30 !border-error text-error'}`}
        placeholder='متن خود را بنویسید ...'
      />
      <p className={`absolute bottom-2 right-2 text-secondary-400 
        text-sm bg-secondary-700 ${isError && '!text-error !bg-red-500/960'}`}>
        {maxLength}/{value.length}
      </p>
    </div>
  )
}

export default TextArea
