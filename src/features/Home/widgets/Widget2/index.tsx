import React from 'react'
import { Pie } from '@/components/Graphics/Pie'
import mock from './mock.json'
import * as S from '../styled'

export function Widget2() {
  return (
    <Pie
      header={
        <S.Header>
          <strong> Top 5 produtos mais vendidos</strong>
        </S.Header>
      }
      options={mock}
    />
  )
}
