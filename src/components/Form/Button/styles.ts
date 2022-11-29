import styled from 'styled-components'

interface ContainerProps {
  color: string
}
export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 42px;
  border-radius: 4px;
  margin-top: 8px;
  background-color: ${(props) => props.color};
  border: 0;
  cursor: pointer;

  &:disabled {
    background-color: #eee;
    filter: none;
    span {
      color: #ccc !important;
    }
  }

  &:hover {
    filter: brightness(96%);
  }
`
