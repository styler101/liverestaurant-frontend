import styled from 'styled-components'

export const Container = styled.div`
 width:100%;
 height:100vh;
 display:flex;
 align-items: center;
 justify-content: center;
 margin: 0;
 overflow-y: hidden;
`
export const LeftContent = styled.div`
 flex:1;
 align-items: stretch;
 height:100%;
 background: rgba(0,0,0,9);
 position:relative;
 img{
  width:100%;
  height: 100%;
  opacity: 0.5;


 }

 .welcome{
   position:absolute;
   top: 50%;
   left:50%;
   transform: translate(-50%, -50%);
   z-index:999;
   width:100%;
   max-width: 600px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content: center;
   h1{
      color:#fff;
      font-weight: semi-bold;
      margin: 0;
      span{
        font-weight: 300;
      }
   }

   h2{
    margin:0;
    color:#f2f2f2;
    font-size: 19px;
    width:100%;
    max-width:500px;
    text-align: center;
    box-shadow: 1px solid #000;
   }
 }
`
export const RightContent = styled.div`
 flex:1;
 height:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content: center;

 .form{
  width:100%;
  max-width: 500px;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;


  img{
    width:100px;
    height: 100px;
    object-fit: cover;
  }

 }

`
