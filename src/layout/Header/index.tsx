import React from 'react'
import { FiMenu } from 'react-icons/fi'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
       <FiMenu size={20} color="#fff"/>
       <h1> Header </h1>
    </S.Container>

  )
}
