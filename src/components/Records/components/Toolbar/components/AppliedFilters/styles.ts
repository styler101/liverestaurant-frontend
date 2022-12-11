import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 100%;
  border-left: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: #b2b2b2;
  }

  div {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #b2b2b2;
    margin-left: 8px;
  }
`
