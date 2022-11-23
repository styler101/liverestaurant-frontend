import React from 'react'
import { HeaderProps } from './interfaces'

import * as S from './styles'

export function Header ({ title, description }: HeaderProps) {
  return (
    <S.Container>
      <h2> {title} </h2>
      <p> {description} </p>
    </S.Container>
  )
}
