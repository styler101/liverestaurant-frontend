import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { RowProps } from '@/types/Records'
import { filterData } from '../../helpers/ColumnsDiff'

export function Row(props: RowProps): JSX.Element {
  const { row, fields } = props
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
    </React.Fragment>
  )
}
