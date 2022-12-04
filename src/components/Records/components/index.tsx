
import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import {ColumnProps} from '@/types/Records'
import * as S from './styles'

interface RecodersProps{
  header: ColumnProps[]
}
export function Records(props: RecodersProps) {
  const { header } = props
  return (
    <S.Wrapper>

      <S.Container raised>
        <Button> Teste</Button>
        <Table singleLine className="records-re" stackable attached={true}>
          <Table.Header className="records-header">
            <Table.Row>
              {header.map((item) => (
                <Table.HeaderCell key={item.key}> {item.content} </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row
              className="records-row"
              style={{ height: 32, padding: 0, margin: 0 }}>
              {header.map((item) => <Table.Cell key={item.key}> {item.content}</Table.Cell>)}
            </Table.Row>
          </Table.Body>
        </Table>
      </S.Container>
    </S.Wrapper>
  )
}
