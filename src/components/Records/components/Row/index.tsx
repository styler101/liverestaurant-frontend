import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { RowProps } from '@/types/Records'
import * as S from './styles'

export function Row(props: RowProps): JSX.Element {
  const { row, fields } = props
  const [columns, setColumns] = useState<any[]>([])

  const filterData = (row: any, fields: String[]) => {
    const filtersColumns = Object.keys(row)
      .map((key) => (fields.includes(key) ? row[key] : null))
      .filter((item) => item !== null)
    setColumns(filtersColumns)
  }

  useEffect(() => {
    filterData(row, fields)
  }, [])

  return (
    <React.Fragment>
      {columns.map((value: any, index) => (
        <Table.Cell key={index} textAlign="center">
          {value}
        </Table.Cell>
      ))}
    </React.Fragment>
  )
}
