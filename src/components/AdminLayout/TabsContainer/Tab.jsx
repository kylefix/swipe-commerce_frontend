import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Tab = ({ name, label, onClick, active, icon }) => (
  <Menu.Item
    style={{ color: 'white' }}
    name={name}
    active={active}
    onClick={() => onClick(name)}
  >
    <Icon name={icon} />
    {label}
  </Menu.Item>
)

export default Tab
