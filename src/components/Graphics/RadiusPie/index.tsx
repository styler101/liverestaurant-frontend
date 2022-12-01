import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsModules from 'highcharts/highcharts-more'
import VariablePie from 'highcharts/modules/variable-pie'
import { Segment } from 'semantic-ui-react'
import { GraphicProps } from '../interface'

HighchartsModules(Highcharts)
VariablePie(Highcharts)

export function RadiusPie(props: GraphicProps) {
  const { header, options } = props

  return (
    <Segment>
      {header}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Segment>
  )
}
