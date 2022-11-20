import React from 'react'
import { InputProps } from './interfaces'
import * as S from './styles'

export const Input = (props: InputProps) => {
  const { icon: Component, name, register, error, ...rest } = props

  return (

      <S.Container className='container'error={error} >
        {(Component != null) && <Component size={20} />}
          <input {...register(name)} { ...rest} />
      </S.Container>

  )
}
