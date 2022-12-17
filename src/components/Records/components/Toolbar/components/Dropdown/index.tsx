import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'
import { ComponenProps } from './interfaces'
import * as S from './styles'

export function Dropdown(props: ComponenProps): any {
  const { dropdownOptions } = props
  return (
    <S.Container>
      {Array.isArray(dropdownOptions) && dropdownOptions.length > 0 && (
        <SemanticDropdown icon="ellipsis vertical">
          <SemanticDropdown.Menu direction="right">
            {dropdownOptions.map((item, index) => (
              <SemanticDropdown.Item
                key={index}
                text={item.text}
                disabled={item.disabled}
                onClick={async () => await item.handler()}
                style={{ fontSize: 13, minWidth: 100, bottom: 0 }}
              />
            ))}
          </SemanticDropdown.Menu>
        </SemanticDropdown>
      )}
    </S.Container>
  )
}
