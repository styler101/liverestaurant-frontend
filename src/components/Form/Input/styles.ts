import styled from 'styled-components'

export const Container = styled.div`
 display:flex;
 align-items:center;
 border: 1px solid #c8c8c8c8;
 border-radius: 4px;
 padding: 0 8px;
 width:100%;

 svg{
  color: #c8c8c8c8;
 }

 input{
  border:0;
  outline:0;
  border-radius: 0 4px 4px 0;
  margin-left: 8px;
  color: #1a1a1d;
  &::placeholder{
    color:#c8c8c8c8;

  }
}

 & + div{
  margin-top: 16px;
 }
`
