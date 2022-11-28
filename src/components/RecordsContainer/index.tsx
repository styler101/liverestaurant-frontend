import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin-top: 32px;
  margin-bottom: 8px;
  overflow: hidden;
`
interface RecordsComponentProps {
  children: React.ReactNode
}

export function RecordsContainer({ children }: RecordsComponentProps) {
  return <Container>{children}</Container>
}
