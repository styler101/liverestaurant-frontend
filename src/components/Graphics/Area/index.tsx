import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import * as S from './styles'
import { GraphicProps } from '../interface'

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
