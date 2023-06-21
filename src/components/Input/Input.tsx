import { InputHTMLAttributes } from 'react'
import * as I from './Input.styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
}

export default function Input ({label, placeholder, value, ...pros}: InputProps) {
    return <I.Wrapper>
       {
        label &&
            <span className="Label">
                { label }: 
            </span>
       }
       <input 
            type='text'
            placeholder={placeholder}
            value={value}
       />
    </I.Wrapper>
}