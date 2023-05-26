import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import * as B from './Button.styles'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'danger' | 'text' | 'primary'
    label: string
    disabled?: boolean
}

export default function Button({ variant, label, disabled,ref, ...props }: ButtonProps) {
    return (
        <B.Wrapper
            variant={variant}
            {...props}
            disabled={disabled}
        >
            {label}
        </B.Wrapper>)
}