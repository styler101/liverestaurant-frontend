import React from 'react'
import { IoCardOutline } from 'react-icons/io5'
import { SimpleCard } from '@/components/Graphics/SimpleCard'
import * as S from './styles'

export function TotalAmmount() {
  return (
    <SimpleCard>
      <S.Container>
        <S.Header>
          <IoCardOutline size={20} />
          <strong> Receita Total </strong>
        </S.Header>
        <h3> R$ 189.320,40</h3>
      </S.Container>
    </SimpleCard>
  )
}
