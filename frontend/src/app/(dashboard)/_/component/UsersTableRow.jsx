import Table from '@/ui/Table'
import toLocalDateShort from '@/utils/dateFormatter';
import React from 'react'
import TableActionsButton from './TableActionsButton';
import Avatar from '@/ui/Avatar';

function UsersTableRow({ index, user }) {
  const {
    avatarUrl,
    name, 
    email,
    bookmarkedPosts,
    likedPosts,
    createdAt,
    updatedAt
  } = user;
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
            alt={user?.name || '-'}
            path={avatarUrl || '/images/avatar.png'}
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toLocalDateShort(createdAt, dateOptions)}</td>
      <td>{toLocalDateShort(updatedAt, dateOptions)}</td>
    </Table.Row>
  )
}

export default UsersTableRow
