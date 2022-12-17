import React, { useEffect, useState } from 'react'
import { Table, Dropdown as SemanticDropdown } from 'semantic-ui-react'
import { RowProps } from '@/types/Records'
import { filterData } from '../../helpers/ColumnsDiff'
import * as S from './styles'

export function Row(props: RowProps): JSX.Element {
  const { row, fields, getItem } = props
  const [columns, setColumns] = useState<any[]>([])

  useEffect(() => {
    setColumns(filterData(row, fields))
  }, [])

  return (
    <React.Fragment>
      {columns.map((value: any, index) => (
        <Table.Cell key={index} textAlign="center">
          {value}
        </Table.Cell>
      ))}
      {getItem !== undefined && (
        <Table.Cell>
          <S.CustomDropdown icon="ellipsis vertical">
            <S.CustomDropdown.Menu className="custom-dropdown" direction="left">
              {getItem(row).map((item, index) => (
                <SemanticDropdown.Item
                  key={index}
                  text={item.content}
                  disabled={item.disabled}
                  onClick={async () => item.onClick()}
                  style={{ fontSize: 13, minWidth: 100 }}
                />
              ))}
            </S.CustomDropdown.Menu>
          </S.CustomDropdown>
        </Table.Cell>
      )}
    </React.Fragment>
  )
}
