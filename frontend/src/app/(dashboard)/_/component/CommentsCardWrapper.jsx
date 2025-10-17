'use client'
import React from 'react'
import Card from './Card'
import { ClipboardDocumentCheckIcon, ArchiveBoxXMarkIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { useGetAllComment } from './useGetAllComment'

function CommentsCardWrapper() {
    const { numOfAcceptedComments, numOfRejectedComments, numOfReviewComments } = useGetAllComment()

    return (
        <>
            <Card
                title={'قبول شده'}
                description={"کامنت های قبول شده"}
                count={numOfAcceptedComments}
                isDisable
                icon={<ClipboardDocumentCheckIcon className='w-7 h-7' />}
                active
            />
            <Card
                title={'رد شده'}
                description={"کامنت های رد شده"}
                count={numOfRejectedComments}
                isDisable
                icon={<ArchiveBoxXMarkIcon className='w-7 h-7' />}
            />
            <Card
                title={'درحال برسی'}
                description={"کامنت های درحال برسی"}
                count={numOfReviewComments}
                isDisable
                icon={<ArrowPathRoundedSquareIcon className='w-7 h-7' />}
            />
        </>
    )
}

export default CommentsCardWrapper
