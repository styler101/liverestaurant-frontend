import React from 'react'
import * as S from './styles'
export function OrderModal () {
  return (
    <S.Overlay>
      <S.Container>
        <header>
          <strong> Mesa </strong>
          <button> X </button>
        </header>
      </S.Container>

    </S.Overlay>
  )
}
