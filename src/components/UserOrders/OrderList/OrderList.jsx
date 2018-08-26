import React from 'react'
import { Table, Header } from 'semantic-ui-react'

import OrderListItem from './OrderListItem/OrderListItem'

const OrderTableHeader = () => (
  <Table.Header fullWidth>
    <Table.Row>
      <Table.HeaderCell>Order Name</Table.HeaderCell>
      <Table.HeaderCell>Price Paid</Table.HeaderCell>
      <Table.HeaderCell>Order Details</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

const NoOrdersView = () => (
  <Header as="h1" color="grey" textAlign="center">
    There is nothing here
  </Header>
)

const OrderList = ({ orders }) => {
  if (!orders.length) {
    return <NoOrdersView />
  }

  const renderOrderList = orders.map((order, idx) => (
    <OrderListItem order={order} key={idx} />
  ))

  return (
    <Table>
      <OrderTableHeader />
      <Table.Body>{renderOrderList}</Table.Body>
    </Table>
  )
}

export default OrderList
