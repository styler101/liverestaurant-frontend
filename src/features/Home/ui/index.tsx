import React from 'react'
import { Header } from '@/components/Header'
import { Toolbar } from '../components/Toolbar'
import { Widget1 } from '../widgets/Widget1'
import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        title="Painel de Atendimento"
        description="Utilize os recuros abaixo para monitorar o faturamento do restaurante"
      />
      <S.Wrapper>
        <Toolbar />
      </S.Wrapper>
      <S.CardsArea>
        <Widget1 />
      </S.CardsArea>
    </S.Container>
  )
}
