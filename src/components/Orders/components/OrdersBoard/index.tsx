import React from 'react'
import { OrdersBoardProps } from './interfaces'
import * as S from './styles'

export function OrdersBoard (props: OrdersBoardProps) {
  const { title, icon } = props
  return (
    <S.Board>
    <header>
      <span>
        <img src={icon} alt="Timer"/>
      </span>
      <span> {title} </span>
      <span> (1)</span>
    </header>
    <S.OrdersContainer>
          <button type="button">
            <strong> Mesa 2 </strong>
            <span> 2 itens</span>
          </button>
    </S.OrdersContainer>
  </S.Board>
  )
}
