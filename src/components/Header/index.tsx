import React from 'react'
import logo from '../../assets/images/svg/logo.svg'
import * as S from './styles'

export function Header () {
  return (
    <S.Container>
    <div className="page-details">
      <h1> Pedidos</h1>
      <h2> Acompannhe os pedidos dos clientes</h2>
    </div>
    <img src={logo} alt="WAITERAPP logo"/>
    </S.Container>
  )
}
