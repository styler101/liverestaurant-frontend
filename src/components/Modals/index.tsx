import React from 'react'
import { ModalProps } from './interfaces'
import * as S from './styles'

export function Modal(props: ModalProps) {
  const { children } = props
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
