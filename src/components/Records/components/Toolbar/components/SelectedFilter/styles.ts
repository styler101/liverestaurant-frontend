import styled from 'styled-components'
import { EnterFilter } from '@/shared/animations'
export const Container = styled.div`
  padding: 16px;
`

export const SelectedContainer = styled.div`
  position: absolute;
  min-width: 160px;
  min-height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  top: 47px;
  right: 155px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 14px 13px;

  label {
    font: normal normal medium 14px/17px Lato;
    color: #525a6a;
    opacity: 0.5;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 14px;
`
export const Item = styled.div`
  color: #525a6a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  & > div {
    justify-content: flex-start;
  }

  & + div {
    margin-top: 14px;
  }
`
