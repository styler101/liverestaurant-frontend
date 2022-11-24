import React from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@/routes'
import { GlobalStyles } from '@/assets/styles/global'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer position="top-right" autoClose={3000} />
      <GlobalStyles />
    </BrowserRouter>
  )
}
