import React from 'react'
import { SimpleProps } from './interfaces'
import * as S from './styles'

export function SimpleCard({ children }: SimpleProps) {
  return <S.Container>{children}</S.Container>
}
