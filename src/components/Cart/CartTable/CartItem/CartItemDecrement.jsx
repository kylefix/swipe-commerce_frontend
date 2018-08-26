import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'

const propTypes = {
  onDecrement: PropTypes.func.isRequired,
  icon: PropTypes.string
}

const defaultProps = {
  icon: 'minus'
}

const CartItemDecrement = ({ onDecrement, icon }) => (
  <Icon
    as="i"
    fitted
    name={icon}
    style={{ cursor: 'pointer' }}
    color="red"
    onClick={onDecrement}
  />
)

CartItemDecrement.propTypes = propTypes
CartItemDecrement.defaultProps = defaultProps

export default CartItemDecrement
