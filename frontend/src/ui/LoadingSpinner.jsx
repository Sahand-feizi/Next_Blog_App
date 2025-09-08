"use client"
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function LoadingSpinner({ width = '80', height='80', color = '#fff' }) {
    return (
        <ThreeDots
            visible={true}
            height={height}
            width={width}
            color={color}
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="m-auto"
        />
    )
}

export default LoadingSpinner
