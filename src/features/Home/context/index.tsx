import React, { useState, useContext } from 'react'
import { HomeContextProps, HomeContextComponentProps } from './interfaces'

const HomeContext = React.createContext({} as HomeContextProps)

export function HomeProvider(props: HomeContextComponentProps) {
  const { children } = props
  const [openModal, setOpenModal] = useState<JSX.Element>(<React.Fragment />)

  return (
    <HomeContext.Provider
      value={{
        openModal,
        handleModal: setOpenModal,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export function useHome() {
  const homeContext = useContext(HomeContext)
  if (!homeContext) {
    throw new Error('You must provided the wrapped home context ')
  }

  return homeContext
}
