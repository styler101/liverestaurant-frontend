import styled from 'styled-components'
import { Segment } from 'semantic-ui-react'

export const Wrapper = styled.div`
  height: calc(100% - 10vh);
  display: flex;
  flex-direction: column;
`

export const Container = styled(Segment)`
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  box-shadow: none !important;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-top: 0;
  border-bottom: 0;
  .ui.table {
    width: 100%;
    overflow-y: auto;
    border-right: 0;
    border-left: 1px solid rgba(34, 36, 38, 0.15) !important;
    border-bottom: 0;
    border-top: 0;
  }

  .ui.loader:after {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    -webkit-animation: loader 0.6s linear;
    animation: loader 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #003566 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0 0 0 1px transparent;
  }
`

export const Toolbar = styled.div`
  height: 46px;
  width: 100%;
  display: flex;
  background: red;
  align-items: center;

  .ui.table {
    width: 100%;
    overflow-y: auto;
    position: relative;
    border: 0;
    display: flex;
    align-items: center;
    height: 46px;

    td {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      & + td {
        border-right: 1px solid #ccc;
      }
    }

    td:first-child {
      border-right: 1px solid #ccc;
    }
  }
`

export const EmptyData = styled.div`
  width: 100%;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  color: #ccc;
`
