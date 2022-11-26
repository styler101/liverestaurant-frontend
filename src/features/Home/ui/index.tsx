import React from 'react'
import { Header } from '@/components/Header'
import { Columns } from '@/components/Graphics'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        title="Painel de Atendimento"
        description="Utilize os recuros abaixo para monitorar o faturamento do restaurante"
      />
      <Columns />
    </S.Container>
  )
}
