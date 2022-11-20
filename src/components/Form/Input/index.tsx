import React from 'react'
import { InputProps } from './interfaces'
import * as S from './styles'

export const Input = (props: InputProps) => {
  const { icon: Component, ...rest } = props

  return (

      <S.Container className='container' >
        {(Component != null) && <Component size={20} />}
          <input {...rest} />
      </S.Container>

  )
}
