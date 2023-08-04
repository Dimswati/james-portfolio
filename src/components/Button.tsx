'use client'

import React, { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref)=>{
    return (
        <button ref={ref} className={className} disabled={disabled} type={type} {...props}>
            {children}
        </button>
    )
})

Button.displayName = "Button"

export default Button