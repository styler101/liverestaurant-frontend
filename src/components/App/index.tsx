import React from 'react'
import { GlobalStyles } from '../../assets/styles/global'
import { Header } from '../Header'
import { Orders } from '../Orders'

export function App () {
  return (
    <React.Fragment>
        <Header/>
        <Orders/>
        <GlobalStyles/>
    </React.Fragment>

  )
}
