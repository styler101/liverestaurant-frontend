import React from 'react'
import { Segment } from 'semantic-ui-react'
import HighchartsModules from 'highcharts/highcharts-more'
import solidgauge from 'highcharts/modules/solid-gauge'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import * as Styles from './styles'

import { GraphicProps } from '../interface'
HighchartsModules(Highcharts)
solidgauge(Highcharts)
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
