import React from 'react'
import * as Io from 'react-icons/io'
// import * as Fi from 'react-icons/fi'
import * as Fa from 'react-icons/fa'

import * as S from './styles'

export function Sidebar() {
  return (
    <S.Container>
      <S.Item>
        <Io.IoMdHome size={23} color="#fff"/>
      </S.Item>

      <S.Item>
         <Io.IoMdCart size={23} color="#fff"/>
      </S.Item>

      <S.Item>
        <Fa.FaUser size={23} color="#fff"/>
      </S.Item>

      <S.Item>
        <Fa.FaEdit size={23} color="#fff"/>
      </S.Item>

    </S.Container>
  )
}
