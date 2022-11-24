import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '@/layout'
import { MainContext } from '../context'
import * as S from './styles'

export function Ui() {
  return (
    <MainContext>
      <S.Container>
        <Header />

        <S.Content>
          <Sidebar />
          <S.Main>
            <Outlet />
          </S.Main>
        </S.Content>
      </S.Container>
    </MainContext>
  )
}
