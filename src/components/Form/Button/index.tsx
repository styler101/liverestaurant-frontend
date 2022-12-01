import React from 'react'
import { ButtonProps } from './interfaces'
import * as S from './styles'

export const Button = (props: ButtonProps) => {
  const { children, color, disabled } = props
  return (
    <S.Container color={color} disabled={disabled}>
      {children}
    </S.Container>
  )
}
