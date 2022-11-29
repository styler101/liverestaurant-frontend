import React from 'react'
import { Segment } from 'semantic-ui-react'
import * as S from './styles'
import { SimpleProps } from './interfaces'

export function SimpleCard({ children }: SimpleProps) {
  return (
    <Segment>
      <S.Container>{children}</S.Container>
    </Segment>
  )
}
