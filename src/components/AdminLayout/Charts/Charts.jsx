import React, { Component } from 'react'
import { Grid, Header, Dropdown } from 'semantic-ui-react'

import { ResponsiveContainer } from 'recharts'

import ChartContainer from './ChartContainer'

import GridColumn from './ChartContainerDisplay'
import { data, options } from './data/data'

class Charts extends Component {
  state = {
    currentChart: 'line',
    options: this.props.options.options,
    data: this.props.options.data
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render () {
    let options = {
      ...this.props.options,
      type: this.state.currentChart,
      data: this.state.data
    }

    return (
      <Grid style={{ margin: '1rem 1rem' }}>
        <GridColumn rowProps={{ style: { paddingBottom: '0' } }} width={8}>
          <Header as="h3">{this.props.title}</Header>
          <Dropdown
            placeholder="Select Category"
            fluid
            search
            selection
            name="currentChart"
            value={this.state.currentChart}
            onChange={this.handleChange}
            options={this.state.options}
          />
        </GridColumn>

        <GridColumn width={16}>
          {this.props.width > 5 &&
            this.props.height > 9 && (
            <ChartContainer
              width={this.props.width}
              height={this.props.height}
              options={options}
            />
          )}
        </GridColumn>
      </Grid>
    )
  }
}

export default Charts
