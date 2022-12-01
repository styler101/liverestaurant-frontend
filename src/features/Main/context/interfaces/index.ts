import React, { SetStateAction } from 'react'

type StateAction<T> = React.Dispatch<SetStateAction<T>>
export interface ContextProps {
  menuActive: boolean
  setMenuActive: StateAction<boolean>
  handleToggleMenu: () => void
  handleOpenDashboardModal: StateAction<JSX.Element>
  openDashboardModal: JSX.Element
}

export interface MainContextProps {
  children: React.ReactNode
}
