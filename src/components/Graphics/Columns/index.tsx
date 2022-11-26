import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import mock from './mock.json'

export function Columns() {
  return <HighchartsReact highcharts={Highcharts} options={mock} />
}
