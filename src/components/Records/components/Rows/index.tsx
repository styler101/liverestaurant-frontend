import React from 'react'
import { Table } from 'semantic-ui-react'
import { Row } from '../Row'
import { RowsProps } from '@/types/Records'

export function Rows(props: RowsProps) {
  const { rows } = props
  console.log(rows)
  return (
    <React.Fragment>
      {rows.map((value, index) => (
        <Table.Row key={index}>
          <Row row={value} />
        </Table.Row>
      ))}
    </React.Fragment>
  )
}
