import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsModules from 'highcharts/highcharts-more'
import Solidgauge from 'highcharts/modules/solid-gauge'
import { Segment } from 'semantic-ui-react'
import { GraphicProps } from '../interfaces'
import * as Styles from './styles'

HighchartsModules(Highcharts)
Solidgauge(Highcharts)

export function SpeedGauge(props: GraphicProps) {
  const { header, options, children } = props
  return (
    <Segment>
      <Styles.Container>
        {header}
        <HighchartsReact highcharts={Highcharts} options={options} />
        {children}
      </Styles.Container>
    </Segment>
  )
}
