import React from 'react'
import { Bullet } from '@/components/Bullet'
import { OptionProps } from '@/types/Records'
import * as S from './styles'

interface ComponentProps {
  item: {
    name: string
    label: string
    options: OptionProps[] | Function
  }
}
export function SelectedFilter(props: ComponentProps) {
  const { label, name, options } = props.item

  return (
    <S.Container>
      {Array.isArray(options) ? (
        <S.SelectedContainer>
          <label> {label}</label>
          <S.ItemContainer>
            {options.map((item, index) => (
              <S.Item key={index} onClick={() => console.log(item.value)}>
                {' '}
                {item.label}
              </S.Item>
            ))}
          </S.ItemContainer>
        </S.SelectedContainer>
      ) : null}
    </S.Container>
  )
}
