import styled from 'styled-components'
import { MoveLeft } from '@/shared/animations'

export const Container = styled.div`
  animation: ${MoveLeft} 2s ease-out;
  position: absolute;
`
export const Percentage = styled.strong`
  font-size: 23px;
  position: absolute;
  bottom: 80px;
`
