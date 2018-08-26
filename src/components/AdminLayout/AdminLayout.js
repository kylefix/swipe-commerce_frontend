import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'

// Components
import TabBarContainer from './TabsContainer/TabBarContainer'
import Dashboard from './Dashboard/Dashboard'
import Categories from './Categories/Categories'
import Reports from './Reports/Reports'
import Pages from './Pages/Admin'

class AdminLayout extends Component {
  render () {
    const tabs = [
      {
        name: 'dashboard',
        icon: 'dashboard',
        label: 'Dashboard',
        component: Dashboard
      },
      { name: 'pages', icon: 'edit', label: 'Pages', component: Pages },
      {
        name: 'categories',
        icon: 'list',
        label: 'Categories',
        component: Categories
      },
      {
        name: 'reports',
        icon: 'table',
        label: 'Reports',
        component: Reports
      }
    ]

    return <TabBarContainer tabs={tabs} />
  }
}

export default AdminLayout
