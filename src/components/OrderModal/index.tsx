import React, { useEffect } from 'react'
import * as Fi from 'react-icons/fi'
import * as Gr from 'react-icons/gr'

import timer from '@/assets/images/svg/timer.svg'
import checked from '@/assets/images/svg/checked.svg'
import { formatCurrency } from '@/utils/Formaters/formatCurrency'
import { OrderModalProps } from './interfaces'

import * as S from './styles'

export function OrderModal (props: OrderModalProps) {
  const { closeModal } = props
  const { table, status, products } = props.data

  const total = products.reduce((accumulator, { quantity, product }) => {
    return accumulator + (product.price * quantity)
  }, 0)

  function handleExit (event: KeyboardEvent) {
    if (event.key === 'Escape') { closeModal(null) }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleExit)

    return () => document.removeEventListener('keydown', handleExit)
  }, [handleExit])

  return (
    <S.Overlay>
      <S.Container>
        <header>
          <strong> { table } </strong>
          <button>
            <Fi.FiX size={18} onClick={() => closeModal(null)}/>
          </button>
        </header>
        <div className="status-container">
          <small> Status do Pedido </small>
          <div>
            <span>
              {status === 'WAITING' && <img src={timer} alt="timer image"/>}
              {status === 'IN_PRODUCTION' && <Gr.GrInProgress/>}
              {status === 'DONE' && <img src={checked}/>}
            </span>

            <strong>
              {status === 'WAITING' && <span> Fila de espera</span>}
              {status === 'IN_PRODUCTION' && <span> Em Preparação </span>}
              {status === 'DONE' && <span> Pronto!</span>}</strong>
          </div>
        </div>
        <S.OrderDetails>
          <strong> Itens </strong>
          <S.OrderItens>
            {products.map(({ _id, product, quantity }) => {
              console.log(product.imagePath)
              return (
              <React.Fragment key={_id}>
                <S.Item>
                  <S.ImageWrapper src={`http://localhost:3001/uploads/${product.imagePath}`} alt="product image"/>
                  <span className="quantity"> {quantity} x</span>
                  <S.ItemDetails>
                    <strong> {product.name} </strong>
                    <span> {formatCurrency(product.price)}</span>
                  </S.ItemDetails>
                </S.Item>
              </React.Fragment>
              )
            })}
            <div className="total">
              <span> Total </span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </S.OrderItens>
        </S.OrderDetails>
        <S.Actions>
            <button type="button" className="primary">
              <span>⌛  </span>
              Iniciar Produção
            </button>
            <button type="button" className="secundary">
              <span>Cancelar </span>
            </button>
      </S.Actions>
      </S.Container>

    </S.Overlay>
  )
}
