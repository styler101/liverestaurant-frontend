import React from 'react'
import * as Fi from 'react-icons/fi'
import { InputSearchProps } from './interfaces'
import * as S from './styles'

export function Search(props: InputSearchProps): JSX.Element {
  // @ts-expect-error
  const { search, setSearch } = props?.search
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Pesquise"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Fi.FiSearch size={20} color="#ccc" />
    </S.Container>
  )
}
