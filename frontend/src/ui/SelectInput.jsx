'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SlArrowUp } from 'react-icons/sl'

function SelectInput({ title, options, name, optionClassName, btnClassName }) {
    const [isOpen, setIsOpen] = useState(false)
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const param = searchParams.get(name)

    function changeRadioInput(e, inputId) {
        e.preventDefault()
        const newParams = new URLSearchParams(searchParams)
        newParams.set(name, inputId)
        router.push(`${pathname}?${newParams}`)
    }

    return (
        <div className='relative flex flex-col gap-2 w-full'>
            <button onClick={() => setIsOpen(prev => !prev)} className={`btn w-full flex items-center 
            justify-between ${btnClassName} !cursor-pointer gap-2 bg-black border border-primary-900 text-primary-900 text-sm sm:text-base
            ${isOpen && 'ring-2 ring-primary-800/40 border-2 border-primary-900/70'}`}>
                <span>{title}</span>
                <SlArrowUp className={`text-sm  transition-all duration-200
                    font-black ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </button>
            <ul className={`p-0 rounded-lg bg-black flex flex-col gap-2 overflow-hidden h-0 ${optionClassName}
                ${isOpen && 'h-auto p-2  ring-2 ring-secondary-600/20 border-2 border-secondary-700/70'}`}>
                {
                    options.map(item => (
                        <li
                            onClick={(e) => changeRadioInput(e, item.slug)}
                            key={item._id}
                            className={`p-2 bg-transparent hover:bg-secondary-700/60 
                            rounded-md flex items-center justify-between text-secondary-300 
                            hover:text-secondary-0 transition-all duration-200 !cursor-pointer
                            ${param == item.slug ? '!bg-primary-800/20 !text-primary-900' :  ''}`}
                        >
                            <p>{item.title}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectInput
