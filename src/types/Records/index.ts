import { SemanticWIDTHSNUMBER, SemanticTEXTALIGNMENTS } from 'semantic-ui-react'

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
}

export interface RowProps {
  row: any
  fields: String[]
}
