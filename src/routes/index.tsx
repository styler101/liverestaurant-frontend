import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { PrivateRoute } from '../utils/PrivateRoute'

export function Routes(): JSX.Element {
  return (
    <Switch>
        <Route index element={<SignIn/>}/>
        <Route path="dashboard" element={
        <PrivateRoute>
           <Home/>
          </PrivateRoute>
          }/>
    </Switch>
  )
}
