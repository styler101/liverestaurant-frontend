import React from 'react'
import { OrdersBoardProps } from './interfaces'
// import mock from '../../../../mocks/Orders/order.json'
import * as S from './styles'
import { OrderModal } from '../../../OrderModal'

export function OrdersBoard (props: OrdersBoardProps) {
  const { title, icon, orders } = props
  const [openedModal, setOpenedModal] = React.useState<JSX.Element | null>(null)

  function handleOpenOrder () {
    setOpenedModal(<OrderModal/>)
  }
  return (
    <S.Board>
    <header>
      <span>
        <img src={icon} alt="Timer"/>
      </span>
      <span> {title} </span>
      <span> (1)</span>
    </header>
     {orders.length > 0 && (
        <S.OrdersContainer>
        {orders.map((order) => (
          <React.Fragment key={order._id}>
            <button type="button" onClick={handleOpenOrder}>
            <strong> Mesa {order.table}</strong>
            <span> {order.products.length} Itens</span>
          </button>
          </React.Fragment>
        ))}
    </S.OrdersContainer>
     )}
    {openedModal}
  </S.Board>
  )
}
