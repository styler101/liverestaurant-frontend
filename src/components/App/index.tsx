import React from 'react'
import { GlobalStyles } from '../../assets/styles/global'
import { SignIn } from '../../pages/SignIn'

export function App () {
  return (
    <React.Fragment>
      <SignIn/>
      <GlobalStyles/>
    </React.Fragment>

  )
}
