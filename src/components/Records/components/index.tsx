import React from 'react'
import { Table, Loader } from 'semantic-ui-react'
import { TableHeader } from './TableHeader'
import { Rows } from './Rows'
import { RecodersProps } from '@/types/Records'
import * as S from './styles'

export function Records(props: RecodersProps) {
  const { header, loading, rows, getItem, search } = props

  return (
    <S.Container raised>
      <Table singleLine className="records-re" stackable attached={true}>
        <TableHeader columns={header} getItem={!!getItem} />
        {loading ? (
          <Loader active />
        ) : rows.length === 0 && search.length > 0 ? (
          <S.EmptyData>
            <p> Não foi encontrado nenhum registro na busca informada.</p>
          </S.EmptyData>
        ) : rows.length === 0 ? (
          <S.EmptyData>
            <p> No momento nenhum registro foi encontrado.</p>
          </S.EmptyData>
        ) : (
          <Table.Body>
            <Rows rows={rows} columns={header} getItem={getItem} />
          </Table.Body>
        )}
      </Table>
    </S.Container>
  )
}
