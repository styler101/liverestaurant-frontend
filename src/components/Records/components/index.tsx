import React from 'react'

import { Table, Button, Loader, Icon } from 'semantic-ui-react'
import { TableHeader } from './TableHeader'
import { Rows } from './Rows'
import { RecodersProps } from '@/types/Records'
import * as S from './styles'

export function Records(props: RecodersProps) {
  const { header, loading, rows } = props

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
          <div>
            <div>
              <Button> Teste </Button>
              <Icon name={'ellipsis vertical'} />
            </div>

            <div>
              <input placeholder={'Pesquisar'} />
              <span> Filtros Aplicados</span>
              <span>Filtros</span>
            </div>
          </div>
        </S.Toolbar>
        <Table singleLine className="records-re" stackable attached={true}>
          <TableHeader columns={header} />
          {loading ? (
            <Loader active />
          ) : (
            <Table.Body>
              <Rows rows={rows} columns={header} />
            </Table.Body>
          )}
        </Table>
      </S.Container>
    </S.Wrapper>
  )
}
