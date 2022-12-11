import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 32px;
  border-left: 1px solid rgba(34, 36, 38, 0.15) !important;
  border-right: 1px solid rgba(34, 36, 38, 0.15) !important;
  border-top: 1px solid rgba(34, 36, 38, 0.15) !important;
  display: flex;
  flex-direction: row;
  border-bottom: 0;
  justify-content: space-between;
`

export const ChildrenItem = styled.div`
  height: 100%;
  width: 160px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 35px;
    width: 130px;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: #3455ab !important;
    transition: filter 0.4s ease-out;
    &:hover {
      filter: opacity(0.8);
    }

    span {
      display: block;
      color: #fff;
      font-size: 13px;
      width: 100%;
    }
  }
`

export const LeftOptions = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const RightOptions = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
