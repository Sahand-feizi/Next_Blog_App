import Table from '@/ui/Table'
import toLocalDateShort from '@/utils/dateFormatter';
import React from 'react'
import CategoryActionsTable from './CategoryActionsTable';

function CategoriesTableRow({ index, category }) {
    const {
        title,
        englishTitle,
        description,
        slug,
        createdAt,
        updatedAt,
        _id
    } = category;
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
                {title}
            </td>
            <td>{englishTitle}</td>
            <td>{description}</td>
            <td>{slug}</td>
            <td>{toLocalDateShort(createdAt, dateOptions)}</td>
            <td>{toLocalDateShort(updatedAt, dateOptions)}</td>
            <td>
                <CategoryActionsTable _id={_id} title={title}/>
            </td>
        </Table.Row>
    )
}

export default CategoriesTableRow
