import React, { useContext } from 'react'
import { Context } from '@/features/Main/context'
import logo from '@/assets/images/svg/ilustra.svg'
import * as Fi from 'react-icons/fi'
import * as S from './styles'

export function Header() {
  const { handleToggleMenu } = useContext(Context)
  const persistedUser = localStorage.getItem('@waiterapp')
  const { name }: any = JSON.parse(persistedUser || '')
  const profileImage = 'https://avatars.githubusercontent.com/u/55026379?v=4'

  function formatName(value: any) {
    const [firstName, lastName] = String(value).split(' ')
    return `${firstName}  ${lastName}`
  }
  return (
    <S.Container>
      <S.LeftContent>
        <div className="menu-wrapper" onClick={() => handleToggleMenu()}>
          <Fi.FiMenu size={23} color="#fff" />
        </div>
        <div>
          <img src={logo} alt="logo" />
          <h1>
            {' '}
            Weaiter<span> App</span>
          </h1>
        </div>
      </S.LeftContent>
      <S.RightContent>
        <Fi.FiBell size={23} color="#fff" />
        <S.Content>
          <div className="profileName">
            <img src={profileImage} alt="Profile" />
            <span> {formatName(name)} </span>
          </div>

          <Fi.FiChevronDown size={23} color="#fff" />
        </S.Content>
      </S.RightContent>
    </S.Container>
  )
}
