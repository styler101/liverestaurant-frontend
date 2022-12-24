import React from 'react'
import { Bullet } from '@/components/Bullet'
import { OptionProps } from '@/types/Records'
import * as S from './styles'

interface ComponentProps {
  name: string
  label: string
  options: OptionProps[] | Function
}
export function SelectedFilter() {
  const options: ComponentProps = {
    name: 'status',
    label: 'Status',
    options: [
      { label: <Bullet content="Ativo" color="#21BA45" />, value: 0 },
      { label: <Bullet content="Inativo" color="#D73035" />, value: 1 },
    ],
  }

  return (
    <S.Container>
      {Array.isArray(options.options) ? (
        <S.SelectedContainer>
          <label> {options.label}</label>
          <S.ItemContainer>
            {options.options.map((item, index) => (
              <S.Item key={index}> {item.label}</S.Item>
            ))}
          </S.ItemContainer>
        </S.SelectedContainer>
      ) : null}
    </S.Container>
  )
}
