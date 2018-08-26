import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

import ButtonProps from '../../propTypes/Button.info.json'

class ProductDetailAddToCart extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string
  }

  static defaultProps = {
    color: 'green'
  }

  render () {
    return <Button {...this.props}>Add to Cart</Button>
  }
}

ProductDetailAddToCart.propList = {
  ...ButtonProps
}

export default ProductDetailAddToCart
