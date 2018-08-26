import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CartItem from './CartItem'

import { incrementCart, decrementCart } from '../../../../reducers/cart'

const propTypes = {
  product: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  addToCart: (productId, qty = 1) => dispatch(incrementCart(productId, qty)),
  removeFromCart: (productId, qty = 1) =>
    dispatch(decrementCart(productId, qty))
})

const CartItemContainer = connect(
  null,
  mapDispatchToProps
)(CartItem)

CartItemContainer.propTypes = propTypes

export default CartItemContainer
