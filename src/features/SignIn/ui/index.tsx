import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Fi from 'react-icons/fi'
import * as Fc from 'react-icons/fc'

import { Input, Button } from '../../../components/Form'

import { FormValues } from './interfaces'

import schema from './schema'

import logo from '../../../assets/images/svg/ilustra.svg'
import wrapper from '../../../assets/images/img/wrapper.jpg'
import * as S from './styles'

export const Ui = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValues>({
    resolver: yupResolver(schema()),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  console.log()
  console.log()
  const onSubmit = (data: FormValues) => console.log(data)
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

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="logo"/>
        <strong> Faça seu login </strong>
        <Input
           icon={Fi.FiMail}
           placeholder="Email"
           width={256}
           height={42}
           name="email"
           register={register}
           error={ Boolean(errors.email)}
           />
          <span className='warning-text'> {errors.email && errors.email.message}</span>
        <Input
          icon={Fi.FiLock}
          type="password"
          placeholder="Senha"
          width={256}
          height={42}
          name="password"
          register={register}
          error={ Boolean(errors.password)}
          />
          <span className='warning-text'> {errors.password && errors.password.message}</span>
        <Button
          color='#FF5A5F'
          disabled={!isValid}
          >
          <S.ButtonLabel>Entrar</S.ButtonLabel>

          </Button>
        <Button color='#4285F4' >
          <S.EntrerWithGoogle>
            <Fc.FcGoogle size={20}/>
              <p>Entrar com o Google</p>
          </S.EntrerWithGoogle>
         </Button>
      </S.Form>

      </S.RightContent>

    </S.Container>
  )
}
