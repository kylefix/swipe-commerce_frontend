import WithLoading from '../HOC/WithLoading'
import { connect } from 'react-redux'

import Cart from './Cart'

const mapStateToProps = state => ({
  cart: state.cart.products,
  page: state.pages.pages['cart']
})

export default connect(mapStateToProps)(WithLoading('cart')(Cart))
