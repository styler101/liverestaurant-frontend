import React from 'react'
import { Content, Header, Sidebar } from '@/layout'
import * as S from './styles'

export function Main() {
  return (
    <S.Container>
        <Header/>
        <Sidebar/>
        <Content/>
    </S.Container>
  )
}
