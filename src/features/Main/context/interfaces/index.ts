import React from 'react'

export interface ContextProps {
  menuActive: boolean
  handleToggleMenu: () => void
}

export interface MainContextProps {
  children: React.ReactNode
}
