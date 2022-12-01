import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { useMain } from '@/features/Main/context'
import { Header } from '@/components/Header'
import { Toolbar } from '../components/Toolbar'

import {
  DailyPerformance,
  TopSells,
  WeeekendIncome,
  DeliveryTypes,
  TotalAmmount,
  IncomeOfYear,
} from '../widgets'

import * as S from './styles'

export function Ui() {
  const { openDashboardModal } = useMain()
  return (
    <S.Container>
      <Header
        title="Painel de Atendimento"
        description="Utilize os recuros abaixo para monitorar o faturamento do restaurante"
      />
      <S.Wrapper>
        <Toolbar />
      </S.Wrapper>

      <S.CardsArea>
        <Grid>
          <Grid.Row columns={'equal'}>
            <Grid.Column>
              <DailyPerformance />
            </Grid.Column>
            <Grid.Column>
              <TopSells />
            </Grid.Column>
            <Grid.Column>
              <WeeekendIncome />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={'equal'}>
            <Grid.Column>
              <DeliveryTypes />
            </Grid.Column>
            <Grid.Column stretched>
              <S.CardGroup itemsPerRow={1}>
                <S.Card>
                  <TotalAmmount />
                </S.Card>
                <S.Card>
                  <TotalAmmount />
                </S.Card>
              </S.CardGroup>
            </Grid.Column>
            <GridColumn stretched>
              <S.CardGroup itemsPerRow={1}>
                <S.Card>
                  <TotalAmmount />
                </S.Card>
                <S.Card>
                  <TotalAmmount />
                </S.Card>
              </S.CardGroup>
            </GridColumn>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <IncomeOfYear />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </S.CardsArea>
      {openDashboardModal}
    </S.Container>
  )
}
