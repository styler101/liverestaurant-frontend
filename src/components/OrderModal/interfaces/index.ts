import React, { SetStateAction } from 'react'
import { Index } from '@/types/Order'

export interface OrderModalProps {
  data: Index
  closeModal: React.Dispatch<SetStateAction<JSX.Element | null>>
}
