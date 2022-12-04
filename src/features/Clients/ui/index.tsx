import React from 'react'

import { Header } from '@/components/Header'
import { Manager } from './components/Manager'

import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        title="Clientes"
        description="Utilize os recursos para gerenciar os seus clientes."
      />
      <Manager />
    </S.Container>
  )
}
