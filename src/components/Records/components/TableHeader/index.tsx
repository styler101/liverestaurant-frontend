import React, { useEffect, useCallback } from 'react'
import { Item, Tab, Table } from 'semantic-ui-react'
import { ColumnProps } from '@/types/Records'
import { TableHeaderProps } from './interfaces'

import * as S from './styles'

export function TableHeader(props: TableHeaderProps): JSX.Element {
  const { columns, getItem } = props
  const { setSort, sort } = props.sort
  const { direction } = sort
  const [sortDirection, setSortDirection] = React.useState<'ASC' | 'DESC'>(
    'ASC'
  )

  function handleSort(fieldName: string, e: ColumnProps) {
    const fields = Array.from(columns)
    const findField = fields.find((field) => field.sortKey === fieldName)
    if (!findField) return
    setSort((prev) => {
      prev.name = fieldName
      prev.direction = prev.direction === 'ASC' ? 'DESC' : 'ASC'
      return { ...prev }
    })
    console.log('Handle Sort', sort)
  }

  return (
    <Table.Header fullWidth>
      <Table.Row>
        {columns.map((item, index) => (
          <Table.HeaderCell
            key={index}
            width={item.width}
            textAlign={item.textAlign}
          >
            <S.Divider>
              {item.content}
              <S.Arrow
                onClick={() => handleSort(item.sortKey, item)}
                direction={Boolean(sort.direction === 'ASC')}
              />
            </S.Divider>
          </Table.HeaderCell>
        ))}
        {getItem && <Table.HeaderCell></Table.HeaderCell>}
      </Table.Row>
    </Table.Header>
  )
}
