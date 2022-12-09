import React from 'react'
import { BulletProps } from './interfaces'
import * as S from './styles'

export function Bullet(props: BulletProps): JSX.Element {
  const { color, content } = props
  return (
    <S.Container>
      <S.Bullet color={color} />
      <span> {content}</span>
    </S.Container>
  )
}
