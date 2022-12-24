import React, { useState } from 'react'
import { FilterOptions } from '@/types/Records'
import { SelectedFilter } from '../SelectedFilter'
import * as S from './styles'

const data: FilterOptions[] = [
  {
    label: 'Status',
    name: 'status',
    options: [
      { label: 'Ativo', value: 0 },
      { label: 'Inativo', value: 1 },
    ],
  },
]

export function Filters() {
  const [activeFilter, setActiveFilter] = useState(false)

  return (
    <React.Fragment>
      <S.Wrapper>
        <S.Container onClick={() => setActiveFilter(true)}>
          <span> Filtros</span>
          <div />
        </S.Container>
        {activeFilter && (
          <S.Options>
            {data.map((item) => (
              <S.Item key={item.label}>
                <span> {item.label}</span>
                <div />
              </S.Item>
            ))}
          </S.Options>
        )}
      </S.Wrapper>
      <SelectedFilter />
    </React.Fragment>
  )
}
