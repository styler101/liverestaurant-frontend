import React from 'react'
import { Segment } from 'semantic-ui-react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ColumnProps } from './interface'

export function Columns(props: ColumnProps) {
  const { header, options } = props
  return (
    <Segment>
      {header}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Segment>
  )
}
