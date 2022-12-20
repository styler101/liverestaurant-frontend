import { ColumnProps, SortState } from '@/types/Records'
import React, { SetStateAction } from 'react'
export interface TableHeaderProps {
  columns: ColumnProps[]
  getItem: boolean
  sort: {
    sort: SortState
    setSort: React.Dispatch<SetStateAction<SortState>>
  }
}
