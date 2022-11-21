import React from 'react'
import { OrdersBoard } from './components/OrdersBoard'
import timerIcon from '@/assets/images/svg/timer.svg'
import cookIcon from '@/assets/images/svg/cookie.svg'
import checkedIcon from '@/assets/images/svg/checked.svg'
import { orders } from '@/mocks/Orders/order'
import * as S from './styles'

export function Orders () {
  return (
    <S.Container>
       <OrdersBoard
         icon={timerIcon}
         title="Fila de espera"
         // @ts-expect-error
         orders={orders}
       />
      <OrdersBoard
        icon={cookIcon}
        title="Em Produção"
        // @ts-expect-error
        orders={orders}
      />
      <OrdersBoard
        icon={checkedIcon}
        title="Pronto!"
        // @ts-expect-error
        orders={orders}
      />
    </S.Container>
  )
}
