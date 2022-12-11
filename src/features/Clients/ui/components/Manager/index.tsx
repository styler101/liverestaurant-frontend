import React from 'react'
import { Button } from 'semantic-ui-react'
import { Records } from '@/components/Records/components'
import { Toolbar } from '@/components/Records/components/Toolbar'
import header from './header'
import mock from './repositories/mock.json'
import dataMapper from './mappers/parser'

export function Manager() {
  const dropOptions = [
    {
      text: 'Extrair Dados',
      handler: () => {
        console.log('Teste 123')
        alert('teste')
      },
      disabled: true,
    },
  ]

  return (
    <React.Fragment>
      <Toolbar dropdown={dropOptions}>
        <Button>
          <span> Criar Contato</span>
        </Button>
      </Toolbar>
      <Records
        header={header}
        loading={false}
        rows={dataMapper.toDomain(mock.data)}
      />
    </React.Fragment>
  )
}
