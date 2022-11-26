import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 70px;
  overflow-y: auto;
`

export const Main = styled.div`
  background: #f5f5f5;
  height: 100%;
  transform: translateX(50px);
  padding: 21px;
  overflow-y: auto;
  width: 98vw;
`

export const Article = styled.article`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`
