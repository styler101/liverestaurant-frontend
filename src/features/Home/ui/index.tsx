import React from 'react'
import { Grid, Card, CardGroup } from 'semantic-ui-react'
import { Header } from '@/components/Header'
import { Toolbar } from '../components/Toolbar'
import {
  DailyPerformance,
  TopSells,
  WeeekendIncome,
  DeliveryTypes,
  TotalAmmount,
} from '../widgets'

import * as S from './styles'

export function Ui() {
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
              <CardGroup itemsPerRow={2}>
                <Card>
                  <TotalAmmount />
                </Card>
                <Card>
                  <TotalAmmount />
                </Card>
                <Card>
                  <TotalAmmount />
                </Card>
                <Card>
                  <TotalAmmount />
                </Card>
              </CardGroup>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </S.CardsArea>
    </S.Container>
  )
}
