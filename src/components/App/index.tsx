import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '../../routes'
import { GlobalStyles } from '../../assets/styles/global'

export function App () {
  return (
      <BrowserRouter>
          <Routes/>
          <GlobalStyles/>
      </BrowserRouter>
  )
}
