import { SemanticWIDTHSNUMBER } from 'semantic-ui-react'

export interface RecodersProps {
  header: ColumnProps[]
  loading: boolean
  rows: any[]
  getItem?: (item: any) => DropDownItemProps[]
}

export interface ColumnProps {
  content: string
  key: string
  sortKey: string
  width: SemanticWIDTHSNUMBER

  textAlign: 'left' | 'center' | 'right'
}

export interface RowsProps {
  rows: any[]
  columns: ColumnProps[]
  getItem?: (item: any) => DropDownItemProps[]
}

export interface RowProps {
  row: any
  fields: String[]
  getItem?: (item: any) => DropDownItemProps[]
}

export interface DropDownItemProps {
  content: string
  onClick: () => void
  disabled: boolean
}
