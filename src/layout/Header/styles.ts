import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #d73035;
  padding: 0 16px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
  position: fixed;
  z-index: 9;
`

export const LeftContent = styled.div`
  display: flex;
  width: 240px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .menu-wrapper {
    width: 56px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 18px;
      color: #fff;
      margin: 0;

      span {
        font-weight: normal;
      }
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 500px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .profileName {
    display: flex;
    align-items: center;
    margin-left: 43px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    span {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      margin-left: 16px;
    }
  }

  svg {
    margin-left: 8px;
  }
`
