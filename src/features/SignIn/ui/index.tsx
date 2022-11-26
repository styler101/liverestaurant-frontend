import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Fi from 'react-icons/fi'
import * as Fc from 'react-icons/fc'

import { Input, Button } from '@/components/Form'
import { Spinner } from '@/components/Spinner'

import { FormValues } from '../interfaces'
import { authentication } from '../services'
import schema from '../schema'

import logo from '@/assets/images/svg/ilustra.svg'
import wrapper from '@/assets/images/img/wrapper.jpg'
import * as S from './styles'
import { delay } from '@/utils/Formaters/timer'

export const Ui = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema()),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit({ email, password }: FormValues) {
    setLoading(true)
    try {
      await delay(500)
      const data = await authentication({ email, password })
      await reset()
      localStorage.setItem('@waiterapp', JSON.stringify(data))
      await toast.success('Usuário autenticado com sucesso!')
      navigate('/main/home')
    } catch (error) {
      await toast.error('Erro ao realizar a autenticação!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Container>
      <S.LeftContent>
        <img src={wrapper} alt="restaurant image" />
        <div className="welcome">
          <h1>
            {' '}
            Waiter<span> App</span>
          </h1>
          <h2>
            {' '}
            Gerencie os pedidos do seu restaurante de uma forma simples e
            intuitiva.
          </h2>
        </div>
      </S.LeftContent>

      <S.RightContent>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <img src={logo} alt="logo" />
          <strong> Faça seu login </strong>

          <Input
            icon={Fi.FiMail}
            placeholder="Email"
            width={256}
            height={42}
            name="email"
            register={register}
            error={Boolean(errors.email)}
            loading={loading}
          />
          {errors.email && (
            <span className="warning-text">{errors.email.message}</span>
          )}

          <Input
            icon={Fi.FiLock}
            type="password"
            placeholder="Senha"
            name="password"
            register={register}
            error={Boolean(errors.password)}
            loading={loading}
          />

          {errors.password && (
            <span className="warning-text">{errors.password.message} </span>
          )}

          <Button color="#FF5A5F" disabled={loading || !isValid}>
            {loading ? (
              <Spinner width={20} height={20} />
            ) : (
              <S.ButtonLabel>Entrar</S.ButtonLabel>
            )}
          </Button>
        </S.Form>
        <S.GoogleWrapper>
          <Button color="#4285F4">
            <S.EntrerWithGoogle>
              <Fc.FcGoogle size={20} />
              <p>Entrar com o Google</p>
            </S.EntrerWithGoogle>
          </Button>
        </S.GoogleWrapper>
      </S.RightContent>
    </S.Container>
  )
}
