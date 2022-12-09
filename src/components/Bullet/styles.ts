import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    display: inline-block;
    margin-left: 8px;
  }
`

interface BulletProps {
  color: string
}
export const Bullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
