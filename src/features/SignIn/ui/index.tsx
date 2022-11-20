import React from 'react'
import { Input, Button } from '../../../components/Form'
import { FiMail, FiLock } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

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

      <S.Form>
        <img src={logo} alt="logo"/>
        <strong> Faça seu login </strong>
        <Input
           icon={FiMail}
           placeholder="Email"
           width={256}
           height={42}
           />
        <Input
          icon={FiLock}
          placeholder="Senha"
          width={256}
          height={42}
          />
        <Button
          color='#FF5A5F'
          disabled={false}
          >
          <S.ButtonLabel>Entrar</S.ButtonLabel>

          </Button>
        <Button color='#4285F4' disabled={false}>
          <S.EntrerWithGoogle>
            <FcGoogle size={20}/>
              <span>Entrar com o Google</span>
          </S.EntrerWithGoogle>
         </Button>
      </S.Form>

      </S.RightContent>

    </S.Container>
  )
}
