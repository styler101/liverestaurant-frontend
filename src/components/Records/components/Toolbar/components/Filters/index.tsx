import React, { useState } from 'react'
import { FilterOptions } from '@/types/Records'
import { SelectedFilter } from '../SelectedFilter'
import * as S from './styles'
import useOnClickOutSide from '@/hooks/useClickoutSide'

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

  const [selectedField, setSelectedField] = useState<JSX.Element>(
    <React.Fragment />
  )
  let filterRef = useOnClickOutSide(() => {
    setActiveFilter(false)
    setSelectedField(<React.Fragment />)
  })

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
              <S.Item
                key={item.label}
                onClick={() => setSelectedField(<SelectedFilter item={item} />)}
              >
                <span> {item.label}</span>
                <div />
              </S.Item>
            ))}
          </S.Options>
        )}
        {selectedField}
      </S.Wrapper>
    </React.Fragment>
  )
}
