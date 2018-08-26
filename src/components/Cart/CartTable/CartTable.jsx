import React from 'react'
import PropTypes from 'prop-types'

import { Table } from 'semantic-ui-react'

import CartItemContainer from './CartItem/CartItemContainer'
import CartTableHeader from './CartTableHeader'
import TableProps from '../../../propTypes/Table.info.json'

const propTypes = {
  cart: PropTypes.array.isRequired
}

const defaultProps = {
  basic: 'very'
}

const CartTable = ({ cart, ...props }) => (
  <Table {...props}>
    <CartTableHeader />
    <Table.Body>
      {cart.map(product => (
        <CartItemContainer product={product} key={product._id} />
      ))}
    </Table.Body>
  </Table>
)

CartTable.propTypes = propTypes
CartTable.propList = {
  ...TableProps,
  props: TableProps.props.concat(
    {
      name: 'cart',
      type: 'array',
      description: 'A reference to an internal object containing the cart data.'
    },
    {
      name: 'style',
      type: 'string',
      description: 'Style your component with CSS'
    }
  )
}
CartTable.defaultProps = defaultProps

export default CartTable
