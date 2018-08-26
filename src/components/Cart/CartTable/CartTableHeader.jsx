import React from 'react'

import { Table } from 'semantic-ui-react'

const TableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell colSpan={2}>Item</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
      <Table.HeaderCell>Quantity</Table.HeaderCell>
      <Table.HeaderCell colSpan={2}>Total</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

export default TableHeader
