import React from 'react'
import { ContextProps, MainContextProps } from './interfaces'

export const Context = React.createContext({} as ContextProps)

export function MainContext({ children }: MainContextProps) {
  const [menuActive, setMenuActive] = React.useState(false)
  const [openModal, setOpenModal] = React.useState<JSX.Element>(
    <React.Fragment />
  )

  function handleToggleMenu() {
    setMenuActive((prev) => !prev)
  }
  return (
    <Context.Provider
      value={{
        handleOpenDashboardModal: setOpenModal,
        openDashboardModal: openModal,
        menuActive,
        handleToggleMenu,
        setMenuActive,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useMain() {
  const mainContext = React.useContext(Context)
  if (!mainContext) {
    throw new Error('You must provided the main context inside the app')
  }
  return mainContext
}
