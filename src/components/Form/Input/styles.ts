import styled, { css } from 'styled-components'

interface ContainerProps {
  error: boolean
  loading?: boolean
}
export const Container = styled.div<ContainerProps>`
 display:flex;
 align-items:center;
 border: 1px solid #c8c8c8c8;
 border-radius: 4px;
 padding: 0 8px;
 width:100%;
 input:-webkit-autofill {
  background-color: #fff;
 }

 & + div{
    margin-top:8px;
  }


&:focus-within{
  border-color:#4285F4;
  svg{
    color: #4285F4;
  }
}




 svg{
  color: #c8c8c8c8;
 }

 input{
  border:0;
  outline:0;
  border-radius: 0 4px 4px 0;
  margin-left: 8px;
  color: #111111;
  flex:1;
  background-color: transparent;


  &::placeholder{
    color:#c8c8c8c8;

  }

}

${(props) => props.error && css`
&:focus-within{
  border-color:#FF5A5F;
  svg{
    color: #FF5A5F;
  }
}
  border: 2px solid #FF5A5F;
  svg{
    color:#FF5A5F;
  }
`}

${(props) => props.loading && css`
  background-color:#eee;

`}
`
