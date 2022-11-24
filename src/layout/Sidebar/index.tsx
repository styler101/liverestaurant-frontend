import React, { useContext } from 'react'
import { Context } from '@/features/Main/context'
import * as Io from 'react-icons/io'
// import * as Fi from 'react-icons/fi'
import * as Fa from 'react-icons/fa'

import * as S from './styles'
import useOnClickOutSide from '@/hooks/useClickoutSide'

export function Sidebar() {
  const { menuActive, setMenuActive } = useContext(Context)
  const menuRef = useOnClickOutSide(() => setMenuActive((prev) => prev))

  return (
    <S.Container menuActive={menuActive} ref={menuRef}>
      <S.Item menuActive={menuActive}>
        <Io.IoMdHome size={23} color="#fff" />
        <div>
          <span> Dashboard </span>
        </div>
      </S.Item>

      <S.Item menuActive={menuActive}>
        <Io.IoMdCart size={23} color="#fff" />
        <div>
          <span> Produtos </span>
        </div>
      </S.Item>

      <S.Item menuActive={menuActive}>
        <Fa.FaUser size={23} color="#fff" />
        <div>
          <span> Clientes </span>
        </div>
      </S.Item>

      <S.Item menuActive={menuActive}>
        <Fa.FaEdit size={23} color="#fff" />
        <div>
          <span> Usuários </span>
        </div>
      </S.Item>

      <S.Item menuActive={menuActive}>
        <Fa.FaFacebookMessenger size={23} color="#fff" />
        <div>
          <span> Chat </span>
        </div>
      </S.Item>
    </S.Container>
  )
}
