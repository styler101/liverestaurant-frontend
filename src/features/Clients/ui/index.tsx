import React from 'react'
import { Header } from '@/components/Header'
import { Composition } from '@/components/Records/components'

import * as S from './styles'

export function Ui() {
  return (
    <S.Container>
      <Header
        title="Clientes"
        description="Utilize os recursos para gerenciar os seus clientes."
      />
      <Composition />
    </S.Container>
  )
}
