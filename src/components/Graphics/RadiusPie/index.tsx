import React from 'react'
import { Segment } from 'semantic-ui-react'
import HighchartsModules from 'highcharts/highcharts-more'
import variablePie from 'highcharts/modules/variable-pie'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { GraphicProps } from '../interface'

HighchartsModules(Highcharts)
variablePie(Highcharts)
export function RadiusPie(props: GraphicProps) {
  const { header, options } = props
  return (
    <Segment>
      {header}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Segment>
  )
}
