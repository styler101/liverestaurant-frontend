import React from 'react'
import { Records } from '@/components/Records/components'
import header from './header'
import mock from './repositories/mock.json'
import dataMapper from './mappers/parser'

export function Manager() {
  return (
    <Records
      header={header}
      loading={false}
      rows={dataMapper.toDomain(mock.data)}
    />
  )
}
