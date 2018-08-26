import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Header, Container } from 'semantic-ui-react'

import { fetchOrders } from '../../reducers/orders'

import OrderList from './OrderList/OrderList'
import Loading from '../.common/Loading'

class UserOrders extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    order: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    if (this.props.loading) return <Loading />
    return (
      <Container style={{ margin: '2rem', padding: '0 2rem' }}>
        <Header as="h1"> Past Orders </Header>
        <OrderList orders={this.props.orders} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders.list,
  loading: state.orders.loading
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOrders)
