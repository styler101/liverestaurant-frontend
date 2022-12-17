import React, { useContext } from 'react'
import * as Io from 'react-icons/io'
import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import { Context } from '@/features/Main/context'
// import * as Fi from 'react-icons/fi'

import * as S from './styles'
import useOnClickOutSide from '@/hooks/useClickoutSide'

export function Sidebar() {
  const { menuActive, setMenuActive } = useContext(Context)
  const menuRef = useOnClickOutSide(() => setMenuActive(false))
  const navigate = useNavigate()

  return (
    <S.Container menuActive={menuActive} ref={menuRef}>
      <S.Item menuActive={menuActive} onClick={() => navigate('/main/home')}>
        <Io.IoMdHome size={23} color="#fff" />
        <div>
          <span> Dashboard </span>
        </div>
      </S.Item>
      {/**
     *  <S.Item menuActive={menuActive} onClick={() => navigate('/products')}>
        <Io.IoMdCart size={23} color="#fff" />
        <div>
          <span> Produtos </span>
        </div>
      </S.Item>

     *
     *
     *
     *
    */}

      <S.Item menuActive={menuActive} onClick={() => navigate('/main/clients')}>
        <Fa.FaUser size={23} color="#fff" />
        <div>
          <span> Clientes </span>
        </div>
      </S.Item>

      <S.Item menuActive={menuActive} onClick={() => navigate('/main/orders')}>
        <Fa.FaEdit size={23} color="#fff" />
        <div>
          <span> Pedidos </span>
        </div>
      </S.Item>

      <S.Item menuActive={menuActive} onClick={() => navigate('/chat')}>
        <Fa.FaFacebookMessenger size={23} color="#fff" />
        <div>
          <span> Chat </span>
        </div>
      </S.Item>
      <S.Item menuActive={menuActive} onClick={() => navigate('/chat')}>
        <Ai.AiFillSetting size={23} color="#fff" />
        <div>
          <span> Configurações </span>
        </div>
      </S.Item>
    </S.Container>
  )
}
