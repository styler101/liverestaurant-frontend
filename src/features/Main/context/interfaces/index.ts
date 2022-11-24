import React, { SetStateAction } from 'react'

type StateAction = React.Dispatch<SetStateAction<boolean>>
export interface ContextProps {
  menuActive: boolean
  setMenuActive: StateAction
  handleToggleMenu: () => void
}

export interface MainContextProps {
  children: React.ReactNode
}
