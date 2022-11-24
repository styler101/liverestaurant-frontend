import styled from 'styled-components'

interface ContainerProps {
  menuActive: boolean
}
export const Container = styled.nav<ContainerProps>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  background: #d73035;
  height: calc(100vh - 70px);
  width: ${(props) => (props.menuActive ? '220px' : '56px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.5s ease-out;
`

export const Item = styled.div<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  svg {
    color: #fff;
  }

  & > div {
    display: ${(props) => (props.menuActive ? 'flex' : 'none')};
    align-items: center;

    flex: 1;

    span {
      color: #fff;
      display: block;
      margin-left: 8px;
    }
  }
`
