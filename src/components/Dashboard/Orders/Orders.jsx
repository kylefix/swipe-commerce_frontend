import React from 'react'
import { connect } from 'react-redux'
import { Header, Container } from 'semantic-ui-react'

import Loading from '../../.common/Loading'
import OrderList from './OrderList/OrderList'

const Orders = ({ orders, loading }) => (
  <Container style={{ margin: '2rem', padding: '0 2rem' }}>
    {loading ? (
      <Loading />
    ) : (
      <>
        <Header as="h1"> Customer Orders </Header>
        <OrderList orders={orders} />
      </>
    )}
  </Container>
)

const mapStateToProps = ({ seller }) => ({
  loading: seller.loading,
  orders: seller.orders
})

export default connect(mapStateToProps)(Orders)
