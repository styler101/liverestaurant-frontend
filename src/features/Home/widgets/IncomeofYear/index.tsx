import React from 'react'
import { Area } from '@/components/Graphics/Area'
import mock from './mock.json'
import * as S from '../styled'

export function IncomeOfYear() {
  return (
    <React.Fragment>
      <Area
        header={
          <S.Header>
            <strong> Levantamento Anual </strong>
          </S.Header>
        }
        options={mock}
      />
    </React.Fragment>
  )
}
