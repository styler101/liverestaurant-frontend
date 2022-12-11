import React from 'react'
import { Dropdown } from './components/Dropdown'
import { Search } from './components/Search'
import { ToolbarProps } from './interfaces'
import * as S from './styles'

export function Toolbar(props: ToolbarProps): JSX.Element {
  const { children, dropdown, search } = props

  console.log(typeof search)
  return (
    <React.Fragment>
      <S.Container>
        <S.LeftOptions>
          {children && <S.ChildrenItem> {children}</S.ChildrenItem>}
          {dropdown && dropdown.length > 0 && (
            <Dropdown dropdownOptions={dropdown} />
          )}
        </S.LeftOptions>
        <S.RightOptions>
          {search && (
            <Search
              search={{
                search: search.search,
                setSearch: search.setSearch,
              }}
            />
          )}
        </S.RightOptions>
      </S.Container>
    </React.Fragment>
  )
}
