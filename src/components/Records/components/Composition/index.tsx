import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import * as S from './styles'

export function Composition() {
  return (
    <S.Wrapper>
      <S.Container raised>
        <Button> Teste</Button>
        <Table singleLine className="records-re" stackable attached={true}>
          <Table.Header className="records-header">
            <Table.Row>
              <Table.HeaderCell> Status </Table.HeaderCell>
              <Table.HeaderCell> Nome </Table.HeaderCell>
              <Table.HeaderCell> Email </Table.HeaderCell>
              <Table.HeaderCell> Telefone </Table.HeaderCell>
              <Table.HeaderCell> Cidade </Table.HeaderCell>
              <Table.HeaderCell> Estado </Table.HeaderCell>
              <Table.HeaderCell> Endereço </Table.HeaderCell>
              <Table.HeaderCell> Cep </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row
              className="records-row"
              style={{ height: 32, padding: 0, margin: 0 }}
            >
              <Table.Cell style={{ height: 32 }}>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
            <Table.Row className="records-row">
              <Table.Cell>Ativo</Table.Cell>
              <Table.Cell>Lucas Santos </Table.Cell>
              <Table.Cell>lucas@gmail.com</Table.Cell>
              <Table.Cell>(31)XXXXX-XXXXX</Table.Cell>
              <Table.Cell>Belo Horizonte</Table.Cell>
              <Table.Cell>Minas Gerais </Table.Cell>
              <Table.Cell>Rua 903 </Table.Cell>
              <Table.Cell>XXXXX-XXX</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </S.Container>
    </S.Wrapper>
  )
}
