import React from 'react'
import PropTypes from 'prop-types'

import { Table, Image, Grid } from 'semantic-ui-react'

import CartItemDecrement from './CartItemDecrement'
import CartItemIncrement from './CartItemIncrement'
import CartItemRemove from './CartItemRemove'

const CART_IMAGE_SIZE = { width: '70px', height: '70px' }

const rowHeight = { height: '1em' }

class CartItem extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
  }

  getTotal = () =>
    (this.props.product.price * this.props.product.quantity).toFixed(2)

  handleRemove = () =>
    this.props.removeFromCart(
      this.props.product._id,
      this.props.product.quantity
    )
  handleDecrement = () => this.props.removeFromCart(this.props.product._id, 1)
  handleIncrement = () => this.props.addToCart(this.props.product._id, 1)

  render () {
    return (
      <Table.Row style={rowHeight}>
        <Table.Cell collapsing>
          <Image src={this.props.product.images[0]} style={CART_IMAGE_SIZE} />
        </Table.Cell>

        <Table.Cell>{this.props.product.title}</Table.Cell>

        <Table.Cell>${this.props.product.price}</Table.Cell>

        <Table.Cell>
          <Grid columns={3}>
            <CartItemIncrement onIncrement={this.handleIncrement} />
            {this.props.product.quantity}
            <CartItemDecrement onDecrement={this.handleDecrement} />
          </Grid>
        </Table.Cell>

        <Table.Cell>${this.getTotal()}</Table.Cell>

        <Table.Cell textAlign="right">
          <CartItemRemove onRemove={this.handleRemove} />
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default CartItem
