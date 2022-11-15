import React from 'react'
import { OrdersBoard } from './components/OrdersBoard'
import timerIcon from '../../assets/images/svg/timer.svg'
import cookIcon from '../../assets/images/svg/cookie.svg'
import checkedIcon from '../../assets/images/svg/checked.svg'
import * as S from './styles'

export function Orders () {
  return (
    <S.Container>
       <OrdersBoard
         icon={timerIcon}
         title="Fila de espera"
       />
      <OrdersBoard
        icon={cookIcon}
        title="Em Produção"
      />
      <OrdersBoard
        icon={checkedIcon}
        title="Pronto!"
      />
    </S.Container>
  )
}
