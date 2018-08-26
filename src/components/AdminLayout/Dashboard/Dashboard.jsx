import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Dropdown, Menu, Icon } from 'semantic-ui-react'

import { getDashboardStats } from '../../../feathers/statistics'

import InteractiveGridLayout from '../Pages/Canvas/InteractiveGrid/InteractiveGridLayout.jsx'

import StatCard from './StatCard'

import { options } from '../Charts/data/data.js'

import Charts from '../Charts/Charts'

import Loading from '../../.common/Loading'

import { setDashboardLayout, PRESETS } from '../../../reducers/admin'

const parseData = salesByMonth =>
  Object.keys(salesByMonth).map(month => ({
    name: month,
    ...salesByMonth[month]
  }))

class Dashboard extends Component {
  state = {
    firstRender: true,
    stats: {
      totalCustomers: 0,
      totalSellers: 0,
      totalProducts: 0,
      totalSales: 0,
      salesByMonth: {},
      usersByMonth: {},
      ordersByMonth: {}
    },
    layout: this.props.layout,
    locked: false
  }

  async componentDidMount () {
    this.setState({ stats: await getDashboardStats() })
  }

  handleSave = () => this.props.setLayout(this.state.layout)

  handleLayoutChange = layout => this.setState({ layout })

  handleLock = () => this.setState({ lock: !this.state.lock })

  render () {
    const {
      totalUsers,
      totalProducts,
      totalSellers,
      totalSales
    } = this.state.stats
    const salesByMonth = parseData(this.state.stats.salesByMonth)

    if (!Object.keys(this.state.stats.salesByMonth).length) {
      return <Loading />
    }

    if (this.state.firstRender) {
      setTimeout(() => this.setState({ firstRender: false }), 0)
    }

    const usersByMonth = parseData(this.state.stats.usersByMonth)
    const unitsByMonth = parseData(this.state.stats.unitsByMonth)
    const ordersByMonth = parseData(this.state.stats.ordersByMonth)
    console.log(JSON.stringify(this.state.layout))

    return (
      <Grid container style={{ margin: '2rem 0' }}>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as="h1" style={{ marginBottom: '3rem' }}>
              Dashboard
            </Header>
          </Grid.Column>
          <Grid.Column width={6}>
            <Menu color="blue" inverted borderless size="small" floated="right">
              <Dropdown defaultValue="cart" color="blue" item text="Presets">
                <Dropdown.Menu>
                  {Object.keys(PRESETS).map(preset => (
                    <Dropdown.Item
                      key={preset}
                      value={preset}
                      onClick={() => this.setState({ layout: PRESETS[preset] })}
                    >
                      {preset.charAt(0).toUpperCase() + preset.slice(1)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name="lock" onClick={this.handleLock}>
                <Icon name="lock" />
                {`${this.state.lock ? 'Unlock' : 'Lock'} layout`}
              </Menu.Item>
              <Menu.Item name="add" onClick={this.handleSave}>
                <Icon name="table" />
                Save Layout
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <InteractiveGridLayout
              isResizable={!this.state.lock}
              isDraggable={!this.state.lock}
              onLayoutChange={this.handleLayoutChange}
              rowHeight={30}
              cols={16}
              layout={this.state.layout}
              draggableCancel=".dropdown"
            >
              <div key="stat0">
                <StatCard label="Total Users" stat={totalUsers} />
              </div>
              <div key="stat1">
                <StatCard label="Total Products" stat={totalProducts} />
              </div>
              <div key="stat2">
                <StatCard label="Total Sellers" stat={totalSellers} />
              </div>
              <div key="stat3">
                <StatCard label="Total Sales" stat={totalSales} />
              </div>
              <div key="chart4">
                <Charts
                  width={this.state.layout[4].w}
                  height={this.state.layout[4].h}
                  title="Total Sales"
                  options={{
                    data: salesByMonth,
                    options: options,
                    labelA: 'sales',
                    dataKey: 'name'
                  }}
                />
              </div>
              <div key="chart5">
                <Charts
                  width={this.state.layout[5].w}
                  height={this.state.layout[5].h}
                  title="New Sign Ups"
                  options={{
                    data: usersByMonth,
                    options: options,
                    labelA: 'users',
                    dataKey: 'name'
                  }}
                />
              </div>
              <div key="chart6">
                <Charts
                  width={this.state.layout[6].w}
                  height={this.state.layout[6].h}
                  title="Products Sold"
                  options={{
                    data: unitsByMonth,
                    options: options,
                    labelA: 'units',
                    dataKey: 'name'
                  }}
                />
              </div>
              <div key="chart7">
                <Charts
                  width={this.state.layout[7].w}
                  height={this.state.layout[7].h}
                  title="Total Orders"
                  options={{
                    data: ordersByMonth,
                    options: options,
                    labelA: 'orders',
                    dataKey: 'name'
                  }}
                />
              </div>
            </InteractiveGridLayout>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  layout: state.admin.dashboard.layout
})

const mapDispatchToProps = dispatch => ({
  setLayout: layout => dispatch(setDashboardLayout(layout))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
