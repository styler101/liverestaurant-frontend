import React from 'react'
import * as Fi from 'react-icons/fi'
import { InputSearchProps } from './interfaces'
import * as S from './styles'

export function Search(props: InputSearchProps): JSX.Element {
  // @ts-expect-error
  const { search, setSearch } = props?.search
  const [showClear, setShowClear] = React.useState<boolean>(false)

  const resetData = () => {
    setShowClear(false)
    setSearch('')
  }
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Pesquise"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setShowClear(true)
          }
        }}
      />
      {showClear ? (
        <Fi.FiX size={20} color="#ccc" onClick={resetData} />
      ) : (
        <Fi.FiSearch size={20} color="#ccc" />
      )}
    </S.Container>
  )
}
