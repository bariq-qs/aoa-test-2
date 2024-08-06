import { InputHTMLAttributes } from 'react'
import '@/app/styles/scss/components/input.scss'

export type TInputProps = InputHTMLAttributes<HTMLInputElement>
const Input = (props: TInputProps) => {
  return <input {...props} className={`form-control ${props.className}`}></input>
}

export default Input