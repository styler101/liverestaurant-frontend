import React from 'react'

interface RuleProps {
  message?: string
  role: () => boolean
}

export interface DropDownProps {
  text: string
  handler: () => Promise<any>
  disabled?: boolean
}

export interface ToolbarProps {
  children: React.ReactNode
  dropdown: DropDownProps[]
}
