import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-areas:
    'header header'
    'wrapper wrapper';
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: wrapper;
  display: flex;
`

export const Main = styled.div`
  padding: 21px;
  flex: 1;
  height: 100%;
  margin: auto;
`
