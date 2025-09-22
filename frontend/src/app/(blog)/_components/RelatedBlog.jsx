import React from 'react'
import KeenSlider from './KeenSlider';

const swiperBreakpoints = {
    '(max-width: 1281px)': {
        slides: {
            perView: 3,
            spacing: 15,
        },
    },
    '(max-width: 768px)': {
        slides: {
            perView: 2.3,
            spacing: 10,
        },
    },
    '(max-width: 645px)': {
        slides: {
            perView: 2,
            spacing: 10,
        },
    },
    '(max-width: 565px)': {
        slides: {
            perView: 1.8,
            spacing: 10,
        },
    },
    '(max-width: 520px)': {
        slides: {
            perView: 1.65,
            spacing: 10,
        },
    },
    '(max-width: 500px)': {
        slides: {
            perView: 1.4,
            spacing: 10,
        },
    },
    '(max-width: 400px)': {
        slides: {
            perView: 1,
            spacing: 10,
        },
    },
}

function RelatedBlog({ blogs }) {
    return (
        <div className='flex flex-col justify-center md:grid w-full my-8 md:grid-cols-1 gap-8'>
            <h3 className='text-secondary-0 font-bold text-2xl text-right'>بلاگ های مرتبط</h3>
            <KeenSlider perView={3} breakpoints={swiperBreakpoints} blogs={blogs} />
        </div>
    )
}

export default RelatedBlog
