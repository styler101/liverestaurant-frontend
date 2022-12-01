import React from 'react'
import { HeaderProps } from './interfaces'
import * as S from './styles'

export function Header(props: HeaderProps) {
  const { description, title } = props
  return (
    <S.Container>
      <h2> {title} </h2>
      <p> {description} </p>
    </S.Container>
  )
}
