import Table from '@/ui/Table'
import toLocalDateShort from '@/utils/dateFormatter';
import React from 'react'
import Avatar from '@/ui/Avatar';
import { toPersianDigits } from '@/utils/numberFormater';
import truncateText from '@/utils/truncateText';

function CommentsTableRow({ index, comment }) {
    const {
        content: { text },
        user,
        status,
        answers,
        createdAt,
        updatedAt
    } = comment;
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>
                <Avatar
                    path={user?.avatarUrl || '/images/avatar.png'}
                    alt={'-'}
                />
            </td>
            <td>{user?.name}</td>
            <td>{truncateText(text, 22)}</td>
            <td className='flex items-center gap-1'>
                {toPersianDigits(answers?.length)}
            </td>
            <td>
                <span className={`badge ${status == 2 ? 'badge--green' : status == 1 ?
                    'badge--secondary' : 'badge--danger'}`}>
                    {
                        status == 2 ? 'قبول شده' : status == 1 ?
                    'درحال برسی' : 'رد شده'
                    }
                </span>
            </td>
            <td>{toLocalDateShort(createdAt, dateOptions)}</td>
            <td>{toLocalDateShort(updatedAt, dateOptions)}</td>
            <td>
                actions...
            </td>
        </Table.Row>
    )
}

export default CommentsTableRow
