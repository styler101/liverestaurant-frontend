import styled from 'styled-components'
import * as Animations from './animations'

interface ContainerProps {
  width?: number
  height?: number
}
export const Container = styled.div<ContainerProps>`
  display:flex;
  align-items: center;
  justify-content: center;
 div{
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 3px solid rgba(180,180,180);
  border-radius: 50%;
  border-left-color: #fff;
  animation: ${Animations.Rotation} 1s linear infinite;
 }



`
