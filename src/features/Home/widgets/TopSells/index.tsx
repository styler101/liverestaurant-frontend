import React from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { Pie } from '@/components/Graphics/Pie'
import mock from './mock.json'
import * as S from '../styled'

export function TopSells() {
  return (
    <Pie
      header={
        <S.Header>
          <strong> Top 5 produtos mais vendidos</strong>
          <AiOutlineExpandAlt size={20} color="#ccc" />
        </S.Header>
      }
      options={mock}
    />
  )
}
