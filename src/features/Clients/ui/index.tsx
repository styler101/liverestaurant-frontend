import React from 'react'
import { Composition } from '@/components/Records/components'
import { Header } from '@/components/Header'

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
