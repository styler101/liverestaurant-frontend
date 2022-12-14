import React from 'react'
import { Item, Tab, Table } from 'semantic-ui-react'
import { TableHeaderProps } from './interfaces'

import * as S from './styles'

export function TableHeader({
  columns,
  getItem,
}: TableHeaderProps): JSX.Element {
  return (
    <Table.Header fullWidth>
      <Table.Row>
        {columns.map((item, index) => (
          <Table.HeaderCell
            key={index}
            width={item.width}
            textAlign={item.textAlign}
          >
            {' '}
            {item.content}
          </Table.HeaderCell>
        ))}
        {getItem && <Table.HeaderCell></Table.HeaderCell>}
      </Table.Row>
    </Table.Header>
  )
}
