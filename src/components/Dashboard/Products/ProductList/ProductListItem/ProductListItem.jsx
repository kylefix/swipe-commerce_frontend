import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProductListItem = ({ product }) => {
  const isAvaliable = product.status === 1 ? 'Available' : 'Not Available'

  return (
    <Table.Row>
      <Table.Cell> {product.title} </Table.Cell>
      <Table.Cell> $ {product.price}</Table.Cell>
      <Table.Cell>
        <Icon
          name='circle'
          style={
            product.qInStock > 30
              ? { color: 'green' }
              : product.qInStock >= 20 ? { color: 'orange' } : { color: 'red' }
          }
        />{' '}
        {product.qInStock}
      </Table.Cell>
      <Table.Cell> {isAvaliable} </Table.Cell>
      <Table.Cell> {product.city} </Table.Cell>
      <Table.Cell>
        <Link to={`/dashboard/product/${product._id}`}>
          <Icon name='edit' size='large' style={{ cursor: 'pointer' }} />
        </Link>
      </Table.Cell>
    </Table.Row>
  )
}

export default ProductListItem
