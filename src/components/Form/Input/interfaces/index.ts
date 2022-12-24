import React from 'react'
import { IconBaseProps } from 'react-icons'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  name: string
  register?: any
  error: boolean
  loading: boolean
}
