import React from 'react'
import header from './header'
import { Records } from '@/components/Records/components'

export function Manager(){
  return <Records
      header={header}
      loading={true}
  />
}
