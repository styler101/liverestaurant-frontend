import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { Segment } from 'semantic-ui-react'
import { GraphicProps } from '../interface'

export function Area(props: GraphicProps) {
  const { header, options } = props
  return (
    <Segment>
      {header}
      <HighchartsReact Highcharts={Highcharts} options={options} />
    </Segment>
  )
}
