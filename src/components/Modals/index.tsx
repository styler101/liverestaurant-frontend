import React from 'react'
import { FiX } from 'react-icons/fi'
import { useMain } from '@/features/Main/context'
import { ModalProps } from './interfaces'
import * as S from './styles'

export function Modal(props: ModalProps) {
  const { children } = props
  const { handleOpenDashboardModal } = useMain()
  return (
    <S.Container>
      <S.Content>
        <header>
          <FiX onClick={() => handleOpenDashboardModal(<React.Fragment />)} />
        </header>
        {children}
      </S.Content>
    </S.Container>
  )
}
