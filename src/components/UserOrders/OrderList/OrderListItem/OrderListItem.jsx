import React from 'react'
import { Table } from 'semantic-ui-react'
import invoice from '../../../invoice'

const OrderListItem = ({ order }) => {
  const date = new Date(order.date)
  return (
    <Table.Row>
      <Table.Cell> {date.toLocaleDateString()} </Table.Cell>
      <Table.Cell> $ {order.price} </Table.Cell>
      <Table.Cell>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: 'blue'
          }}
          onClick={() => invoice(order.orderId)}
        >
          {order.orderId}
        </span>
      </Table.Cell>
    </Table.Row>
  )
}

export default OrderListItem
