import React from 'react'

import logo from '../../../assets/images/svg/ilustra.svg'
import wrapper from '../../../assets/images/img/wrapper.jpg'
import * as S from './styles'

export const Ui = () => {
  return (
    <S.Container>
      <S.LeftContent>
        <img src={wrapper} alt="restaurant image"/>
        <div className="welcome">
          <h1> Waiter<span> App</span></h1>
          <h2> Gerencie os pedidos do seu restaurante de uma forma simples e intuitiva.</h2>
        </div>
      </S.LeftContent>
      <S.RightContent>
      <div className="form">
        <img src={logo} alt="logo"/>
        <strong> Faça seu Logon </strong>
        <input type="text" placeholder="Informe o seu email"/>
        <input type="text" placeholder="Informe  sua senha"/>
        <button> Entrar com o Google </button>
        <button> Entrar </button>
      </div>
      </S.RightContent>
    </S.Container>
  )
}
