import styled from 'styled-components'

export const Container = styled.nav`
 background: #d73035;
 height:100vh;
 width:56px;
 display:flex;
 flex-direction:column;
 align-items:center;
 grid-area: sidebar;


`

export const Item = styled.div`
 width:100%;
 height:56px;
 display:flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 &:hover{
  background-color:rgba(255,255,255,0.3);
 }
`
