import styled, { css } from 'styled-components'

interface ContainerProps {
  error: boolean
  loading: boolean
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid #c8c8c8c8;
  border-radius: 4px;
  padding: 0 8px;
  width: 100%;
  input:-webkit-autofill {
    background-color: #fff;
  }

  & + div {
    margin-top: 8px;
  }

  &:focus-within {
    border-color: #4285f4;
    svg {
      color: #4285f4;
    }
  }

  svg {
    color: #c8c8c8c8;
  }

  input {
    border: 0;
    outline: 0;
    border-radius: 0 4px 4px 0;
    margin-left: 8px;
    color: #111111;
    flex: 1;
    background-color: transparent;
    input:-internal-autofill-selected {
      background-color: #fff !important;
    }
    &::placeholder {
      color: #c8c8c8c8;
    }
  }

  ${(props) =>
    props.error &&
    css`
      &:focus-within {
        border-color: #ff5a5f;
        svg {
          color: #ff5a5f;
        }
      }
      border: 2px solid #ff5a5f;
      svg {
        color: #ff5a5f;
      }
    `}

  ${(props) =>
    props.loading &&
    css`
      background-color: #eee;
    `}
`
