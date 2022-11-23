import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { SignIn } from '@/pages/SignIn'
import { Main } from '@/pages/Main'
import { Orders } from '@/pages/Orders'
import { Home } from '@/pages/Home'
import { Error404 } from '@/pages/Error404'
import { PrivateRoute } from '@/utils/PrivateRoute'

export function Routes(): JSX.Element {
  return (
    <Switch>
        <Route index path="/"element={<SignIn/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/main" element={<PrivateRoute><Main/></PrivateRoute>}>
          <Route path="home" element={<Home/>}/>
          <Route path ="orders" element={ <Orders/>}/>
        </Route>
    </Switch>
  )
}
