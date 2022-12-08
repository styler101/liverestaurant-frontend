import React from 'react'
import header from './header'
import mock from './mock.json'
import { Records } from '@/components/Records/components'

export function Manager() {
  return <Records header={header} loading={false} rows={mock.data} />
}
