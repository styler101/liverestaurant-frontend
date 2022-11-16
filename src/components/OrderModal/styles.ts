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
`
