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
  overflow-y: hidden;
  z-index: 99;
`
export const Article = styled.article`
  flex: 1;
  height: 100vh;
  overflow-y: hidden;
  padding: 16px;
  z-index: 99;
`

export const Main = styled.div`
  background: #f5f5f5;
  height: 100%;
  transform: translateX(50px);
  padding: 21px;
  overflow-y: auto;
  width: 98vw;
  z-index: 99;
`
