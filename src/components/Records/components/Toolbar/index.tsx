import React from 'react'
import { Dropdown } from './components/Dropdown'
import { ToolbarProps } from './interfaces'
import * as S from './styles'

export function Toolbar(props: ToolbarProps): JSX.Element {
  const { children, dropdown } = props
  console.log(dropdown)
  return (
    <React.Fragment>
      <S.Container>
        {children && <S.ChildrenItem> {children}</S.ChildrenItem>}
        {dropdown && dropdown.length > 0 && (
          <Dropdown dropdownOptions={dropdown} />
        )}
      </S.Container>
    </React.Fragment>
  )
}
