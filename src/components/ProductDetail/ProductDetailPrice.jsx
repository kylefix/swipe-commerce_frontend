import React from 'react'
import PropTypes from 'prop-types'

import HeaderProps from '../../propTypes/Header.info.json'

import { Header } from 'semantic-ui-react'

const propTypes = {
  price: PropTypes.number,
  as: PropTypes.string.isRequired
}

const defaultProps = {
  as: 'h1'
}

const ProductDetailPrice = ({ price, ...props }) => (
  <Header {...props}>${price}</Header>
)

ProductDetailPrice.propTypes = propTypes
ProductDetailPrice.defaultProps = defaultProps
ProductDetailPrice.propList = {
  ...HeaderProps,
  props: HeaderProps.props.concat({
    name: 'price',
    type: 'string',
    description: 'The price of the product'
  })
}

export default ProductDetailPrice
