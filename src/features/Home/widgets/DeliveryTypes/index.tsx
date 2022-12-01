import React from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { RadiusPie } from '@/components/Graphics/RadiusPie'
import mock from './mock.json'
import * as S from '../styled'

export function DeliveryTypes() {
  return (
    <React.Fragment>
      <RadiusPie
        header={
          <S.Header>
            <strong>Faturamento semanal </strong>
            <AiOutlineExpandAlt size={20} color="#ccc" />
          </S.Header>
        }
        options={mock}
      />
    </React.Fragment>
  )
}
