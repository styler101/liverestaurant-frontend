import styled from 'styled-components'

interface ContainerProps {
  color: string
}
export const Container = styled.button<ContainerProps>`
 width:100%;
 height:42px;
 border-radius: 4px;
 margin-top: 16px;
 background-color: ${(props) => props.color};
 border:0;



`
