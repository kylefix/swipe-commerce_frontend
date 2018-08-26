import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

import Loading from '../../.common/Loading'

import { getReportsStats } from '../../../feathers/statistics'

import TopSellers from './TopSellers'
import TopProducts from './TopProducts'

class Reports extends Component {
  state = {
    topSellers: [],
    topProducts: [],
    loading: true
  }
  componentDidMount = async () => {
    const { topSellers, topProducts } = await getReportsStats()
    this.setState({ topSellers, topProducts, loading: false })
  }

  render () {
    if (this.state.loading) return <Loading />

    return (
      <Container style={{ margin: '2rem 0' }}>
        <Header as="h1" style={{ marginBottom: '3rem' }}>
          Monthly Sales
        </Header>
        <TopSellers topSellers={this.state.topSellers} />
        <TopProducts topProducts={this.state.topProducts} />
      </Container>
    )
  }
}

export default Reports
