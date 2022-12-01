import React from 'react'

type StateAction<T> = React.Dispatch<React.SetStateAction<T>>

export interface HomeContextProps {
  handleModal: StateAction<JSX.Element>
  openModal: JSX.Element
}

export interface HomeContextComponentProps {
  children: React.ReactNode
}
