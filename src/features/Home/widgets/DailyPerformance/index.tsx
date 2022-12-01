import React from 'react'

import { Modal } from '@/components/Modals'
import { CreatePortal } from '@/hooks/CreatePortal'
import { SpeedGauge } from '@/components/Graphics/SpeedGauge'
import mock from './mock'
import * as S from '../styled'
import * as Styles from './styles'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { useMain } from '@/features/Main/context'

export function DailyPerformance() {
  const { handleOpenDashboardModal } = useMain()
  return (
    <Styles.Container>
      <SpeedGauge
        header={
          <S.Header>
            <strong> Performance Diária </strong>
            <AiOutlineExpandAlt
              size={20}
              color="#ccc"
              onClick={() =>
                handleOpenDashboardModal(
                  <CreatePortal containerId="performance-modal-root">
                    <Modal>
                      <DailyPerformance />
                    </Modal>
                  </CreatePortal>
                )
              }
            />
          </S.Header>
        }
        options={mock}
      >
        <Styles.Percentage> 80%</Styles.Percentage>
      </SpeedGauge>
    </Styles.Container>
  )
}
