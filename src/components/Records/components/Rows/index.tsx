import React from 'react'
import { isEqual } from 'lodash'
import { Table } from 'semantic-ui-react'
import { Row } from '../Row'
import { RowsProps } from '@/types/Records'

export function Rows(props: RowsProps) {
  const { rows, columns } = props
  console.log('Rows')

  const fields = columns.map((item) => item.key)

  return (
    <React.Fragment>
      {rows.map((value, index) => (
        <Table.Row key={index}>
          <Row row={value} fields={fields} />
        </Table.Row>
      ))}
    </React.Fragment>
  )
}
