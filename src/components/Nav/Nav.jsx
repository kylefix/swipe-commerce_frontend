import React from 'react'

import { Menu, Icon } from 'semantic-ui-react'

import NavLinks from './NavLinks'
import SideNav from './SideNav/SideNav'

const Hamburger = ({ onClick }) => (
  <Menu.Item onClick={onClick}>
    <Icon name="sidebar" />
  </Menu.Item>
)

export default ({ mobile, onClick }) => (
  <Menu
    style={{ paddingLeft: '1em', marginBottom: '0px' }}
    color="grey"
    pointing
    secondary
    borderless
    size="large"
  >
    {mobile ? <Hamburger onClick={onClick} /> : <NavLinks />}
    <SideNav />
  </Menu>
)
