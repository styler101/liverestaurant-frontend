import React from 'react'
import { HeaderProps } from './interfaces'
import logo from '@/assets/images/svg/logo.svg'
import * as S from './styles'

export function Header ({ title, description }: HeaderProps) {
  return (
    <S.Container>
    <S.Content>
      <div>
        <h1> Pedidos</h1>
        <h2> Acompannhe os pedidos dos clientes</h2>
      </div>
      <img src={logo} alt="WAITERAPP logo"/>
    </S.Content>
    </S.Container>
  )
}
