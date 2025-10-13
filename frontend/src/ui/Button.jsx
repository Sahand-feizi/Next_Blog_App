import React from 'react'

const btnTypes = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    white: 'btn--white',
    danger: 'btn--danger',
    outline: 'btn--outline'
}

function Button({ children, variant, onClick, className, type, ...rest }) {
    return (
        <button
            className={`btn ${btnTypes[variant]} ${className}`}
            onClick={onClick}
            type={type}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button