import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Menu, Divider, Segment, Container } from 'semantic-ui-react'

import SidebarHeader from './SidebarHeader/SidebarHeader'

const sidebarStyle = {
  height: '100%',
  minHeight: '100vh'
}

const renderMenuLink = (active, to, name) => (
  <Menu.Item active={active}>
    {!active ? (
      <Link to={to}>{name}</Link>
    ) : (
      <span style={{ color: 'white' }}>{name}</span>
    )}
  </Menu.Item>
)

const Sidebar = ({ path, active }) => (
  <Menu
    style={sidebarStyle}
    inverted
    color='blue'
    pointing
    size='large'
    vertical
  >
    <Container>
      <Segment inverted vertical color='blue'>
        <SidebarHeader />
      </Segment>
      <Divider />
      <Segment inverted vertical color='blue'>
        {renderMenuLink(active === 'Dashboard', `${path}`, 'Dashboard')}
        {renderMenuLink(
          active === 'Dashboard_Products',
          `${path}/products`,
          'Products'
        )}
        {renderMenuLink(
          active === 'Dashboard_Orders',
          `${path}/orders`,
          'Orders'
        )}
      </Segment>
    </Container>
  </Menu>
)

const mapStateToProps = ({ active }) => ({
  active
})

export default connect(mapStateToProps)(Sidebar)
