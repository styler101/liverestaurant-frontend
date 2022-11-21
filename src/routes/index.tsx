import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { SignIn } from '@/pages/SignIn'
import { Home } from '@/pages/Home'
import { Orders } from '@/pages/Orders'
import { PrivateRoute } from '@/utils/PrivateRoute'

export function Routes(): JSX.Element {
  return (
    <Switch>
        <Route index element={<SignIn/>}/>
        <Route path="dashboard" element={
        <PrivateRoute>
           <Home/>
          </PrivateRoute>
          }/>
           <Route path="orders" element={
        <PrivateRoute>
           <Orders/>
          </PrivateRoute>
          }/>
    </Switch>
  )
}
