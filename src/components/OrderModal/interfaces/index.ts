import React, { SetStateAction } from 'react'
import { Order } from '@/types/Order'

export interface OrderModalProps {
  data: Order
  closeModal: React.Dispatch<SetStateAction<JSX.Element | null>>
}
