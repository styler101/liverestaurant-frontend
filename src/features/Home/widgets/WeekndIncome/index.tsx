import React from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { Columns } from '@/components/Graphics'
import mock from './mock.json'
import * as S from '../styled'

export function WeeekendIncome() {
  return (
    <Columns
      header={
        <S.Header>
          <strong>Faturamento semanal </strong>
          <AiOutlineExpandAlt size={20} color="#ccc" />
        </S.Header>
      }
      options={mock}
    />
  )
}
