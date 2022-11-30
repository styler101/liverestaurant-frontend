import React from 'react'

import { SpeedGauge } from '@/components/Graphics/SpeedGauge'
import mock from './mock'
import * as S from '../styled'
import * as Styles from './styles'
import { AiOutlineExpandAlt } from 'react-icons/ai'

export function DailyPerformance() {
  return (
    <SpeedGauge
      header={
        <S.Header>
          <strong> Performance Diária </strong>
          <AiOutlineExpandAlt size={20} color="#ccc" />
        </S.Header>
      }
      options={mock}
    >
      <Styles.Percentage> 80%</Styles.Percentage>
    </SpeedGauge>
  )
}
