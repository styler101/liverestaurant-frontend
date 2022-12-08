import React from 'react'
import { Table } from 'semantic-ui-react'
import { RowProps } from '@/types/Records'
import * as S from './styles'

export function Row(props: RowProps): JSX.Element {
  const { row } = props

  return (
    <React.Fragment>
      {Object.values(row).map((value: any, index) => (
        <Table.Cell key={index}>{value}</Table.Cell>
      ))}
    </React.Fragment>
  )
}
