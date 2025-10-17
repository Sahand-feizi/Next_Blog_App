'use client'
import React, { useState } from 'react'
import { EditButton } from './Buttons';
import ButtonIcon from '@/ui/ButtonIcon';
import { PencilIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Modal from '@/ui/Modal';
import DeleteBlogForm from './DeleteBlogForm';
import DeleteCommentForm from './DeleteCommentForm';

function CommentsTableActionsButton({ name, _id }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center gap-2">
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                title={'حذف نظر'}
                description={name}
            >
                <DeleteCommentForm
                    _id={_id}
                    onClose={() => setIsOpen(false)}
                />
            </Modal>
            <ButtonIcon
                onClick={() => setIsOpen(true)}
                className={`cursor-pointer`}
                variant={'secondary'}
            >
                <TrashIcon className='w-6 h-6' />
            </ButtonIcon>
            <ButtonIcon
                className={`cursor-pointer`}
                variant={'secondary'}
            >
                <PencilSquareIcon className='w-6 h-6' />
            </ButtonIcon>
        </div>
    )
}

export default CommentsTableActionsButton
