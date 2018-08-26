import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'

const propTypes = {
  onIncrement: PropTypes.func.isRequired,
  icon: PropTypes.string
}

const defaultProps = {
  icon: 'add'
}

const CartItemIncrement = ({ onIncrement, icon }) => (
  <Icon
    name={icon}
    fitted
    onClick={onIncrement}
    color="grey"
    style={{ cursor: 'pointer' }}
  />
)

CartItemIncrement.propTypes = propTypes
CartItemIncrement.defaultProps = defaultProps

export default CartItemIncrement
