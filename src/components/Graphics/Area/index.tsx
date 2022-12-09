import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { GraphicProps } from '../interfaces'
import * as S from './styles'

export function Area(props: GraphicProps) {
  const { header, options } = props
  console.log(options)
  return (
    <S.Container>
      {header}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </S.Container>
  )
}
