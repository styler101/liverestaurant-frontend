import styled, { css } from 'styled-components'
export const Container = styled.div``

interface ArrowProps {
  direction: boolean
}
export const Arrow = styled.button<ArrowProps>`
  width: 0;
  height: 0;
  border-top: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #ccc;

  ${(props) => {
    if (props.direction) {
      return css`
        transform: rotate(0);
      `
    }
    return css`
      transform: rotate(180deg);
    `
  }}

  margin-left: 8px;
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
