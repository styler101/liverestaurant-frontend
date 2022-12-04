
import React from 'react'
import { Table, Button, Loader, Icon } from 'semantic-ui-react'
import { ColumnProps } from '@/types/Records'
import * as S from './styles'

interface RecodersProps{
  header: ColumnProps[],
  loading: boolean
}
export function Records(props: RecodersProps) {
  const { header, loading } = props
  return (
    <S.Wrapper>

      <S.Container raised>
        <S.Toolbar>
          <Table className="records-re">
             <Table.Cell width={4}>
               <Button> Teste </Button>
               <Icon name={'ellipsis vertical'}/>
             </Table.Cell>

            <Table.Cell width={12}>
              <input placeholder={'Pesquisar'}/>
              <span> Filtros Aplicados</span>
              <span>Filtros</span>
            </Table.Cell>
          </Table>

        </S.Toolbar>
        <Table singleLine className="records-re" stackable attached={true}>
          <Table.Header className="records-header">
            <Table.Row>
              {header.map((item) => (
                <Table.HeaderCell key={item.key}> {item.content} </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          {loading ? <Loader active/> : (
            <Table.Body>
              <Table.Row
                className="records-row"
                style={{ height: 32, padding: 0, margin: 0 }}>
                {header.map((item) => <Table.Cell key={item.key}> {item.content}</Table.Cell>)}
              </Table.Row>
            </Table.Body>
          )}
        </Table>
      </S.Container>
    </S.Wrapper>
  )
}
