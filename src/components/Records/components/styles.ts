import styled from 'styled-components'
import { Segment } from 'semantic-ui-react'

export const Wrapper = styled.div`
  height: calc(100% - 10vh);
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
    border-bottom:0;
  }

  .ui.loader:after{
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    -webkit-animation: loader .6s linear;
    animation: loader .6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #003566 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0 0 0 1px transparent;
  }
`
