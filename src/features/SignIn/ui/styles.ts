import styled from 'styled-components'
import {
  MoveRight,
  MoveDown,
  GoogleButtonAnimations,
  MoveUp,
} from '@/shared/animations'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-y: hidden;

  button {
    max-width: 316px;
  }
`

export const LeftContent = styled.div`
  flex: 1;
  align-items: stretch;
  height: 100%;
  background: rgba(0, 0, 0, 9);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  .welcome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: #fff;
      font-weight: semi-bold;
      margin: 0;
      animation: ${MoveDown} 1.5s ease-out;
      span {
        font-weight: 300;
      }
    }

    h2 {
      margin: 0;
      color: #ccc;
      font-size: 16px;
      width: 100%;
      max-width: 500px;
      text-align: center;
      box-shadow: 1px solid #000;
      font-weight: normal;
      animation: ${MoveRight} 2s ease-out;
    }
  }
`
export const RightContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  .form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 80px;
      height: 80px;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 380px;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${MoveUp} 0.5s ease-out;

  img {
    width: 300px;
    height: 100px;
  }

  .warning-text {
    display: block;
    width: 100%;
    margin: 8px 0;
    color: #ff5a5f;
    font-weight: 400;
    text-align: center;
  }
  strong {
    margin: 16px;
    font-size: 24px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    color: #c8c8c8;
    font-weight: 600;
  }

  input {
    height: 42px;
  }
`

export const GoogleWrapper = styled.div`
  width: 360px;
  animation: ${GoogleButtonAnimations} 2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const EntrerWithGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #f2f2f2;

  span {
    font-weight: 600;
    display: block;
    margin-left: 8px;
  }
`

export const ButtonLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #f2f2f2;

  span {
    font-weight: 600;
    display: block;
    margin-left: 8px;
  }
`
