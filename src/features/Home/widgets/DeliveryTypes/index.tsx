import React from 'react'
import { RadiusPie } from '@/components/Graphics/RadiusPie'
import mock from './mock.json'

export function DeliveryTypes() {
  return (
    <React.Fragment>
      <RadiusPie header={<h1> Tipos de Pedido</h1>} options={mock} />
    </React.Fragment>
  )
}
