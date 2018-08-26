import React from 'react'

import { Menu } from 'semantic-ui-react'

import app from '../../../feathers'

import SellerButton from './SellerButton'
import UserInfo from './UserInfo'
import CartButton from './CartButton'
import LoginButton from './LoginButton'

const isLoggedIn = () => !!app.get('user')

const NavBar = () => (
  <Menu.Item position="right">
    {isLoggedIn() ? (
      <>
        {/* <SellerButton /> */}
        <UserInfo />
        <CartButton />
      </>
    ) : (
      <LoginButton />
    )}
  </Menu.Item>
)
export default NavBar
