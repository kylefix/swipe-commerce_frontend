import React from 'react'
import { Table, Header } from 'semantic-ui-react'

const ProductHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Product Name</Table.HeaderCell>
      <Table.HeaderCell>Total Units Sold</Table.HeaderCell>
      <Table.HeaderCell>Seller Name</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

const ProductItem = ({ name, units, seller }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{units}</Table.Cell>
    <Table.Cell>{seller}</Table.Cell>
  </Table.Row>
)

const TopProducts = ({ topProducts }) => (
  <>
    <Header as="h3" style={{ marginBottom: '3rem' }}>
      Top 10 Products
    </Header>
    <Table celled color="blue">
      <ProductHeader />
      <Table.Body>
        {topProducts.map((product, idx) => (
          <ProductItem
            key={idx}
            name={product.title}
            units={product.total}
            seller={product.seller}
          />
        ))}
      </Table.Body>
    </Table>
  </>
)

export default TopProducts
