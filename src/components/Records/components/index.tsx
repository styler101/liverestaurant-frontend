import React from 'react'

import { Table, Loader } from 'semantic-ui-react'
import { TableHeader } from './TableHeader'
import { Rows } from './Rows'
import { RecodersProps } from '@/types/Records'
import * as S from './styles'

export function Records(props: RecodersProps) {
  const { header, loading, rows } = props

  return (
    <S.Wrapper>
      <S.Container raised>
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
