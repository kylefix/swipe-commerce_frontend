import PropTypes from 'prop-types'
import { dependencies } from './default.js'
import createReactElement from '../../helpers/createReactElement'

const propTypes = {
  cart: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.object.isRequired
}

const Cart = createReactElement(dependencies, propTypes)

export default Cart
