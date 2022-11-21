import React from 'react'
import { Navigate } from 'react-router-dom'

interface RouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: RouteProps): JSX.Element => {
  const storagedData = localStorage.getItem('@waiterapp')
  const { accessToken } = storagedData ? JSON.parse(storagedData) : {}
  return accessToken ? children : <Navigate to="/" replace/>
}
