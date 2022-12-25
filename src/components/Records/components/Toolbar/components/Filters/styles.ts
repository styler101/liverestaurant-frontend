import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

export const Container = styled.button`
  width: 150px;
  height: 100%;
  border: 0;
  border-left: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: 0;

  background: transparent;

  span {
    color: #b2b2b2;
    font-weight: 400;
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

export const Options = styled.div`
  position: absolute;
  min-width: 154px;
  min-height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  top: 48px;
  right: 0px;
  z-index: 999;
  transition: top 5s linear;
`

export const Item = styled.button`
  display: block;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 0;
  background-color: transparent;
  text-align: left;
  font: normal normal 14px/17px Lato;
  letter-spacing: 0px;
  color: #525a6a;
  opacity: 0.8;

  &:hover {
    background-color: #f5f5f5;
  }

  div {
    width: 0;
    height: 0;
    border-left: 5px solid #b5b5b5;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
  }
`
