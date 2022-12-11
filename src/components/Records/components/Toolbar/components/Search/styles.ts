import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-right: 8px;

  input {
    flex: 1;
    border: 0;
    height: 100%;
    outline: 0;
    padding-left: 8px;
    margin-right: 8px;
    background-color: transparent;
  }

  svg {
    cursor: pointer;
  }
`
