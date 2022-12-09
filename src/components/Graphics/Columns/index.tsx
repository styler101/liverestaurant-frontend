import React from 'react'
import { Segment } from 'semantic-ui-react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { GraphicProps } from '../interfaces'

export function Columns(props: GraphicProps) {
  const { header, options } = props
  return (
    <Segment>
      {header}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Segment>
  )
}
