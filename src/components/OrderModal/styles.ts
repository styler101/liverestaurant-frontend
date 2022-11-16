import styled from 'styled-components'

export const Overlay = styled.div`
 width:100%;
 height: 100%;
 position: fixed;
 top:0;
 left:0;
 background: rgba(0,0,0,0.5);
 backdrop-filter: blur(4.5px);
 display:flex;
 align-items:center;
 justify-content: center;
`

export const Container = styled.div`
 background:#fff;
 width: 480px;
 display:flex;
 flex-direction:column;
 border-radius: 8px;
 padding:32px;

 header{
  width:100%;
  display: flex;

  align-items:center;
  justify-content: space-between;
  button{
    display:flex;
    align-items:center;
    background:transparent;
    border:0;
    svg{
      cursor: pointer;
    }
  }
 }

 .status-container{
  margin-top: 32px;

  small{
    font-size: 14px;
    opacity: 0.8;
  }
  div{
    display:flex;
    align-items: center;
    gap: 8px;
  }
 }
`
export const OrderDetails = styled.div`
 margin-top:32px;

 > strong{
   font-weight: 500;
   font-size:14;
   opacity: 0.8;
 }
`

export const OrderItens = styled.div`
 margin-top:16px;
 .total{
  width:100%;
  margin-top:24px;
  display:flex;
  align-items:center;
  justify-content: space-between;
  span{
    opacity: 0.8;
  }
}
`
export const Item = styled.div`
display:flex;
flex-direction: row;

& + div{
  margin-top: 16px;
}

.quantity{
  font-size:16px;
  color: #666;
  display:block;
  min-width:20px;
  margin-left:12px;
}


`

export const ImageWrapper = styled.img`
 width: 56px;
 height: 30px;
 object-fit: contain;
 border-radius: 6px;

`

export const ItemDetails = styled.div`
  margin-left: 12px;
  strong{
    display:block;
    margin-left:6px;
  }

  span{
    font-size: 14px;
    color:#666;
  }

`

export const Actions = styled.div`
width: 100%;
display: flex;
flex-direction:column;
margin-top: 16px;
 .primary{
  background:#333333;
  border-radius: 48px;
  border: 0;
  padding: 14px 24px;
  color:#fff;
  display:flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  justify-content: center;

 }

 .secundary{
  padding:14px 24px;
  color: #d73035;
  font-weight:bold;
  border:0;
  margin-top: 16px;
  background-color:transparent;
 }

`
