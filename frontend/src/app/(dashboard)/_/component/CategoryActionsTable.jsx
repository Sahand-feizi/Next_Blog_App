'use client'
import React, { useState } from 'react'
import { EditButton } from './Buttons';
import ButtonIcon from '@/ui/ButtonIcon';
import { TrashIcon } from '@heroicons/react/24/outline';

function CategoryActionsTable({ title, _id }) {

    return (
        <div className="flex items-center gap-2">
            <EditButton
                path={`/profile/categories/edit/${_id}`}
                className={`cursor-pointer`}
            />
            <ButtonIcon
                className={`cursor-pointer`}
                variant={'secondary'}
            >
                <TrashIcon className='w-6 h-6' />
            </ButtonIcon>
        </div>
    )
}

export default CategoryActionsTable
