import { SemanticWIDTHSNUMBER, SemanticTEXTALIGNMENTS } from 'semantic-ui-react'

export interface ColumnProps {
  content: string
  key: string
  sortKey: string
  width: SemanticWIDTHSNUMBER

  textAlign: SemanticTEXTALIGNMENTS
}
