import React from 'react'
import { Header } from '@/components/Header'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        title="Clientes"
        description="Utilize os recursos para gerenciar os seus clientes."
      />
    </S.Container>
  )
}
