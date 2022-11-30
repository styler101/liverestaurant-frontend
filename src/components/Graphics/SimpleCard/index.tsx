import React from 'react'

import * as S from './styles'
import { SimpleProps } from './interfaces'

export function SimpleCard({ children }: SimpleProps) {
  return <S.Container>{children}</S.Container>
}
