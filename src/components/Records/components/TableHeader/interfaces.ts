import { ColumnProps } from '@/types/Records'
import React, { SetStateAction } from 'react'
export interface TableHeaderProps {
  columns: ColumnProps[]
  getItem: boolean
}
