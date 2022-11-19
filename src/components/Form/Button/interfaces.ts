import React from 'react'
import { IconBaseProps } from 'react-icons'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ComponentType<IconBaseProps>
  color: string
  disabled?: boolean
}
