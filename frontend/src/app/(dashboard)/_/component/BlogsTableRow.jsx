import Table from '@/ui/Table'
import toLocalDateShort from '@/utils/dateFormatter';
import React from 'react'
import TableActionsButton from './TableActionsButton';

function BlogsTableRow({ index, blog }) {
  const {
    title,
    briefText,
    category,
    likesCount,
    commentsCount,
    readingTime,
    author,
    isBookmarked,
    isLiked,
    type,
    createdAt,
    updatedAt
  } = blog;
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{briefText}</td>
      <td>{category.tilte}</td>
      <td className='flex items-center gap-1'>
        {likesCount}
      </td>
      <td>
        {commentsCount}
      </td>
      <td>
        {readingTime} <span className="text-xs">دقیقه</span>
      </td>
      <td>{author.name}</td>
      <td>
        <div className={`w-3 h-3 rounded-full ${isLiked ?
          'bg-green-700/60' :
          'bg-error/60'}`}></div>
      </td>
      <td>
        <div className={`w-3 h-3 rounded-full ${isBookmarked ?
          'bg-green-700/60' :
          'bg-error/60'}`}></div>
      </td>
      <td>
        <span className={`badge ${type == 'free' ? 'badge--green' :
          'badge--danger'}`}>
          {
            type == 'free' ? 'رایگان' : 'پولی'
          }
        </span>
      </td>
      <td>{toLocalDateShort(createdAt, dateOptions)}</td>
      <td>{toLocalDateShort(updatedAt, dateOptions)}</td>
      <td>
        <TableActionsButton {...blog}/>
      </td>
    </Table.Row>
  )
}

export default BlogsTableRow
