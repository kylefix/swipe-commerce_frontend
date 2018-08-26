import React from 'react'
import { Table } from 'semantic-ui-react'

const OrderListItem = ({ order }) => {
  const { city, country } = order.orderDetails[0].address
  const transactionId = order.orderDetails[0]._id

  return (
    <Table.Row>
      <Table.Cell> {order.orderDetails[0].displayName} </Table.Cell>
      <Table.Cell>
        {' '}
        $ {order.orderDetails.reduce(
          (acc, detail) => acc + detail.price,
          0
        )}{' '}
      </Table.Cell>
      <Table.Cell> {`${city}, ${country}`} </Table.Cell>
      <Table.Cell> {transactionId} </Table.Cell>
    </Table.Row>
  )
}

export default OrderListItem
