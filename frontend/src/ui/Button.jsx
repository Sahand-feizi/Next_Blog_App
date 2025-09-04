import React from 'react'

const btnTypes = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    white: 'btn--white',
    danger: 'btn--danger'
}

function Button({ children, variant, onClick, className, ...rest }) {
    return (
        <button
            className={`btn ${btnTypes[variant]} ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button