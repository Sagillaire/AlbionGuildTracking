import { FC } from 'react'
import { IButton } from './types'

export const Button: FC<IButton> = ({ text }) => {
  return (
    <button>{text}</button>
  )
}
