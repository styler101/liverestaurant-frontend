import styled from 'styled-components'
import { Segment } from 'semantic-ui-react'

export const Wrapper = styled.div`
  height: calc(100% - 157px);
  margin-top: 32px !important;
  display: flex;
  flex-direction: column;
`

export const Container = styled(Segment)`
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  .ui.table {
    overflow-y: auto;
    width: 100%;
    border-right: 0;
    border-left: 0;
  }
`
