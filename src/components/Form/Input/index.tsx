import React from 'react'
import { InputProps } from './interfaces'
import * as S from './styles'

export const Input = (props: InputProps) => {
  const { icon: Component, name, register, error, loading, ...rest } = props

  return (

      <S.Container className='container'error={error} loading={loading} >
        {(Component != null) && <Component size={20} />}
          <input {...register(name)} { ...rest} disabled={loading} autoComplete="false"/>
      </S.Container>

  )
}
