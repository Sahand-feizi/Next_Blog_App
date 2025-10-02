import React from 'react'
import SidbarLink from './SidbarLink'

function SidbarSection({ options }) {
    return (
        <div className='w-full space-y-3'>
            {
                options.map((item) => (
                    <SidbarLink key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default SidbarSection
