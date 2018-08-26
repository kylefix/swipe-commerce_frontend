import React from 'react'
import { Table, Header } from 'semantic-ui-react'

const SellerHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Seller Name</Table.HeaderCell>
      <Table.HeaderCell>Total Sales</Table.HeaderCell>
      <Table.HeaderCell>Units Sold</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

const SellerItem = ({ name, sales, products }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{sales}</Table.Cell>
    <Table.Cell>{products}</Table.Cell>
  </Table.Row>
)

const TopSellers = ({ topSellers }) => (
  <>
    <Header as="h3" style={{ marginBottom: '3rem' }}>
      Top 10 Sellers
    </Header>
    <Table celled color="green">
      <SellerHeader />

      <Table.Body>
        {topSellers.map((seller, idx) => (
          <SellerItem
            key={idx}
            name={seller.displayName}
            sales={seller.total}
            products={seller.units}
          />
        ))}
      </Table.Body>
    </Table>
  </>
)

export default TopSellers
