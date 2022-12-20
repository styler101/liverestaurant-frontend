import React, { useEffect, useCallback } from 'react'
import * as Fi from 'react-icons/fi'
import { InputSearchProps } from './interfaces'
import { useDebounce } from '@/hooks/useDebounce'
import * as S from './styles'

export function Search(props: InputSearchProps): JSX.Element {
  const { search, setSearch } = props.search
  // esse será o estado que o usuário vai ficar vendo na tela
  const [displayValue, setDisplayValue] = React.useState<string>(search)
  const [showClear, setShowClear] = React.useState<boolean>(false)

  function resetData() {
    setShowClear(false)
    setDisplayValue('')
    setSearch('')
  }

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value)
  }, [])

  useEffect(() => {}, [])
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Pesquise"
        value={displayValue}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setShowClear(true)
            setSearch(displayValue)
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
