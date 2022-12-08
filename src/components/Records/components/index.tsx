import React from 'react'
import { Table, Button, Loader, Icon, Tab } from 'semantic-ui-react'
import { ColumnProps } from '@/types/Records'
import * as S from './styles'
import { matchRoutes } from 'react-router-dom'

interface RecodersProps {
  header: ColumnProps[]
  loading: boolean
  rows: any[]
}
export function Records(props: RecodersProps) {
  const { header, loading, rows } = props
  const parserRowsToObject = Object.assign({}, rows)
  /*
  Object.entries(parserRowsToObject).map(([arrayKey, arrayValue]) => {
    const objectValue = Object.values(arrayValue)
   return
  })
  /*
  Object.entries(parserRowsToObject).map(([key, value]) => {
    const [objectKey, objectValue] = Object.entries(value)
    // @ts-expect-error
    header.map((item) => console.log(objectValue))
  })
  */

  return (
    <S.Wrapper>
      <S.Container raised>
        <S.Toolbar>
          <Table className="records-re">
            <Table.Cell width={4}>
              <Button> Teste </Button>
              <Icon name={'ellipsis vertical'} />
            </Table.Cell>

            <Table.Cell width={12}>
              <input placeholder={'Pesquisar'} />
              <span> Filtros Aplicados</span>
              <span>Filtros</span>
            </Table.Cell>
          </Table>
        </S.Toolbar>
        <Table singleLine className="records-re" stackable attached={true}>
          <Table.Header className="records-header">
            <Table.Row>
              {header.map((item, index) => (
                <React.Fragment key={index}>
                  <Table.HeaderCell key={item.key}>
                    {' '}
                    {item.content}{' '}
                  </Table.HeaderCell>
                </React.Fragment>
              ))}
            </Table.Row>
          </Table.Header>
          {loading ? (
            <Loader active />
          ) : (
            <Table.Body>
              <Table.Row>
                {Object.entries(parserRowsToObject).map(
                  ([arrayKey, arrayValue]) => {
                    const objectValue = Object.values(arrayValue)
                    // @t-ignore
                    return (
                      <Table.Cell key={Math.random()}>
                        <span> {objectValue}</span>
                      </Table.Cell>
                    )
                  }
                )}
              </Table.Row>
            </Table.Body>
          )}
        </Table>
      </S.Container>
    </S.Wrapper>
  )
}
