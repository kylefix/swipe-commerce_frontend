import React from 'react'
import { Menu } from 'semantic-ui-react'
import Tab from './Tab'

import ToggleDisplay from './ToggleDisplay'

const TabBar = props => {
  const { tabs, currentTab, onTabClick, ...otherProps } = props

  const tabItems = tabs.map(tabInfo => {
    const { name, label, icon } = tabInfo

    return (
      <Tab
        key={name}
        icon={icon}
        name={name}
        label={label}
        active={currentTab === name}
        onClick={onTabClick}
      />
    )
  })

  const tabPanels = tabs.map(tabInfo => {
    const { name, component: TabComponent } = tabInfo

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    )
  })

  return (
    <>
      <Menu
        style={{
          backgroundColor: '#124c80',
          borderTop: 'none'
        }}
        attached="top"
        {...otherProps}
      >
        <Menu.Item>
          <img src="/favicon.ico" />
        </Menu.Item>
        {tabItems}
      </Menu>
      {tabPanels}
    </>
  )
}

export default TabBar
