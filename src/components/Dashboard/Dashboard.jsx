import React, { Component } from 'react'
import { Grid, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchProducts, fetchOrders } from '../../reducers/seller'
import { setActive } from '../../reducers/active'

import Sidebar from './Sidebar/Sidebar'
import Products from './Products/Products'
import ProductForm from './Products/ProductForm/ProductForm'
import Orders from './Orders/Orders'
import Analytics from './Analytics/Analytics'
import Loading from '../.common/Loading'

class Dashboard extends Component {
  render () {
    if (this.props.loading) return <Loading />
    const { url } = this.props.match
    return (
      <Grid divided="vertically">
        <Grid.Column width={4}>
          <Sidebar path={url} />
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Route
            exact
            path={url}
            render={() => {
              this.props.setActive('Dashboard')
              this.props.fetchOrders()
              return <Analytics />
            }}
          />
          <Route
            exact
            path={`${url}/products`}
            render={() => {
              this.props.setActive('Dashboard_Products')
              return <Products />
            }}
          />
          <Route
            exact
            path={`${url}/product/:id`}
            render={({ match }) => {
              this.props.setActive('Dashboard_Product')
              this.props.fetchProducts()
              return <ProductForm id={match.params.id} />
            }}
          />
          <Route
            exact
            path={`${url}/orders`}
            render={() => {
              this.props.setActive('Dashboard_Orders')
              this.props.fetchOrders()
              return <Orders />
            }}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchOrders: () => dispatch(fetchOrders('seller')),
  setActive: active => dispatch(setActive(active))
})

const mapStateToProps = state => ({
  active: state.active,
  loading: state.user.loading
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
