import styled from 'styled-components'

export const Board = styled.div`
padding: 16px;
width:100%;
border: 1px solid rgba(204, 204, 205, 0.4);
border-radius:4px;

header{
  font-size: 14px;
  display:flex;
  align-items:center;
  justify-content: center;
  margin: 8px 0;
  gap: 8px;
  span{
    font-weight:bold;
    display:flex;
    align-items:center;
    &:last-child{
      font-weight: normal;
    }
  }
}
`

export const OrdersContainer = styled.div`
  display:flex;
  flex-direction:column;

  button{
  border: 1px solid rgba(204, 204, 205, 0.4);
  border-radius:8px;
  background-color: #fff;
  height: 128px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;

  & + button{
    margin-top: 8px;
  }
  }
`
