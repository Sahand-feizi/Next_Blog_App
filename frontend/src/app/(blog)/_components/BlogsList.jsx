import React from 'react'
import BlogItem from './BlogItem'

function BlogsList({ blogs }) {
    
    return (
        <>
            {
                blogs?.map(blog => (
                    <div key={blog._id} className='col-span-12 sm:col-span-6 lg:col-span-4 h-[18rem]'>
                        <BlogItem {...blog} />
                    </div>
                ))
            }
        </>
    )
}

export default BlogsList
