import React from 'react'
import { ContextProps, MainContextProps } from './interfaces'

export const Context = React.createContext({} as ContextProps)

export function MainContext({ children }: MainContextProps) {
  const [menuActive, setMenuActive] = React.useState(false)

  function handleToggleMenu() {
    setMenuActive((prev) => !prev)
  }
  return (
    <Context.Provider value={{ menuActive, handleToggleMenu }}>
      {children}
    </Context.Provider>
  )
}
