import React, { useState } from 'react'
import { Dropdown, Popup } from 'semantic-ui-react'
import { FiMoreVertical, FiEye, FiEyeOff } from 'react-icons/fi'
import { BsFillGridFill, BsGrid3X3GapFill } from 'react-icons/bs'
import { Header } from '@/components/Header'
import useOnClickOutSide from '@/hooks/useClickoutSide'
import * as S from './styles'

export function Ui() {
  const [activeOptions, setActiveOptions] = useState(false)
  const dropRef = useOnClickOutSide(() => setActiveOptions(false))
  return (
    <S.Container>
      <Header
        title="Painel de Atendimento"
        description="Utilize os recuros abaixo para monitorar o faturamento do restaurante"
      />
      <S.Wrapper>
        <S.Options>
          <Popup
            trigger={
              <button type="button" onClick={() => setActiveOptions(true)}>
                Modo de Exibição
                {activeOptions ? <FiEye /> : <FiEyeOff />}
              </button>
            }
            position="bottom center"
            on="click"
            open={activeOptions}
            content={
              <S.OptionsContainer ref={dropRef}>
                <BsFillGridFill size={25} color="#1a1a1d" />
                <BsGrid3X3GapFill size={25} color="#1a1a1d" />
              </S.OptionsContainer>
            }
          />

          <Dropdown
            icon={<FiMoreVertical color="#1a1a1d" size={20} />}
            floating
          >
            <Dropdown.Menu direction="left">
              <Dropdown.Item text="Exportar em PDF" />
            </Dropdown.Menu>
          </Dropdown>
        </S.Options>
      </S.Wrapper>
    </S.Container>
  )
}
