'use client'
import React, { useState } from 'react'
import { EditButton } from './Buttons';
import ButtonIcon from '@/ui/ButtonIcon';
import { PencilIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Modal from '@/ui/Modal';
import DeleteBlogForm from './DeleteBlogForm';
import DeleteCommentForm from './DeleteCommentForm';
import EditCommentForm from './EditCommentForm';

function CommentsTableActionsButton({ name, _id, status }) {
    const [isOpen, setIsOpen] = useState(false)
    const [Open, setOpen] = useState(false)

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
                onClick={() => setOpen(true)}
                className={`cursor-pointer`}
                variant={'secondary'}
            >
                <PencilSquareIcon className='w-6 h-6' />
            </ButtonIcon>
            <Modal
                open={Open}
                onClose={() => setOpen(false)}
                title={'حذف نظر'}
                description={name}
            >
                <EditCommentForm
                    status={status}
                    _id={_id}
                    onClose={() => setOpen(false)}
                />
            </Modal>
        </div>
    )
}

export default CommentsTableActionsButton
