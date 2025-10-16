'use client'
import React, { useState } from 'react'
import { EditButton } from './Buttons';
import ButtonIcon from '@/ui/ButtonIcon';
import { TrashIcon } from '@heroicons/react/24/outline';
import Modal from '@/ui/Modal';
import DeleteCategoryForm from './DeleteCategoryForm';

function CategoryActionsTable({ title, _id }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center gap-2">
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                title={'حذف دسته بندی'}
                description={title}
            >
                <DeleteCategoryForm
                    _id={_id}
                    title={title}
                    onClose={() => setIsOpen(false)}
                />
            </Modal>
            <EditButton
                path={`/profile/categories/edit/${_id}`}
                className={`cursor-pointer`}
            />
            <ButtonIcon
                onClick={() => setIsOpen(true)}
                className={`cursor-pointer`}
                variant={'secondary'}
            >
                <TrashIcon className='w-6 h-6' />
            </ButtonIcon>
        </div>
    )
}

export default CategoryActionsTable
