import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'

const propTypes = {
  onRemove: PropTypes.func.isRequired,
  icon: PropTypes.string
}

const defaultProps = {
  icon: 'trash alternate outline'
}

const CartItemRemove = ({ onRemove, icon }) => (
  <Icon
    as="i"
    name={icon}
    size="large"
    color="grey"
    style={{ cursor: 'pointer' }}
    onClick={onRemove}
  />
)

CartItemRemove.propTypes = propTypes
CartItemRemove.defaultProps = defaultProps

export default CartItemRemove
