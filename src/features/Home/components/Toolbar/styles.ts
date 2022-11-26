import styled from 'styled-components'

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

  button {
    font-size: 18px;
    border: 0;
    color: #c8c8c8;
    background-color: transparent;
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }
`

export const OptionsContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
