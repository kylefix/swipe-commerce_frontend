import React from 'react'
import { Table, Header } from 'semantic-ui-react'

import ProductListItem from './ProductListItem/ProductListItem'

const ProductTableHeader = () => (
  <Table.Header fullWidth>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
      <Table.HeaderCell>Quantity</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>City</Table.HeaderCell>
      <Table.HeaderCell />
    </Table.Row>
  </Table.Header>
)

const NoProductsView = () => (
  <Header as='h1' color='grey' textAlign='center'>
    {' '}
    There is nothing here{' '}
  </Header>
)
const ProductList = ({ products }) => {
  if (!products.length) return <NoProductsView />

  const renderProductList = products.map((product, idx) => (
    <ProductListItem product={product} key={idx} />
  ))

  return (
    <Table>
      <ProductTableHeader />
      <Table.Body>{renderProductList}</Table.Body>
    </Table>
  )
}

export default ProductList
