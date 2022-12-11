import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { Popup } from 'semantic-ui-react'
import { Dropdown } from './components/Dropdown'
import { Search } from './components/Search'
import { Filters } from './components/Filters'
import { AppliedFilters } from './components/AppliedFilters'
import { ToolbarProps } from './interfaces'
import * as S from './styles'

export function Toolbar(props: ToolbarProps): JSX.Element {
  const { children, dropdown, search, reloader } = props

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
          {reloader && (
            <Popup
              position="bottom center"
              trigger={
                <S.Reloader onClick={reloader}>
                  <AiOutlineReload color="#ccc" size="20" />
                </S.Reloader>
              }
              content={<strong>Atualizar</strong>}
              inverted
              on="hover"
            />
          )}
          {search && (
            <Search
              search={{
                search: search.search,
                setSearch: search.setSearch,
              }}
            />
          )}
          <AppliedFilters />
          <Filters />
        </S.RightOptions>
      </S.Container>
    </React.Fragment>
  )
}
