'use client'
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import BlogItem from "./BlogItem"
import "keen-slider/keen-slider.min.css"

function KeenSlider({ blogs, breakpoints, perView}) {
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "free",

        slides: {
            perView: perView,
            spacing: 15,
        },
        breakpoints: breakpoints
    })

    return (
        <div ref={sliderRef} className="keen-slider">
            {
                blogs.map(item => (
                    <div key={item._id} className="keen-slider__slide number-slide1 flex justify-center">
                        <BlogItem className={'w-full !h-[20rem]'} {...item} />
                    </div>
                ))
            }
        </div>
    )
}

export default KeenSlider
