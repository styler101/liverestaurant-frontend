import styled from 'styled-components'
import {
  CardGroup as SemanticGroup,
  Card as SemanticCard,
} from 'semantic-ui-react'

export const Container = styled.div`
  height: 100% !important;
  overflow-y: scroll;
  position: relative;
  padding-right: 16px;
`

export const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`

export const CardsArea = styled.div`
  margin-top: 8px;
  height: 100%;
  position: relative;
  flex: 1;
`

export const CardGroup = styled(SemanticGroup)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Card = styled(SemanticCard)`
  border: 0;
  flex: 1 !important;
  border: 0 !important;
  box-shadow: none;
`
