import styled from 'styled-components'

export const Container = styled.header`
 width:100%;

 background-color:#D73035;

`

export const Content = styled.div`
 width:100%;
 max-width: 1216px;
 display:flex;
 align-items: center;
 justify-content: space-between;
 margin: auto;
 padding:16px 0;

 div{
  display:flex;
  flex-direction:column;

  h1, h2{
    color: #fff;
  }

  h1{
    font-size:32px;
  }

  h2{
    font-weight: normal;
    font-size:18px;
    margin-top: 6px;
  }
 }
`
