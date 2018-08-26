import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'semantic-ui-react'

import HeaderProps from '../../propTypes/Header.info.json'

const propTypes = {
  title: PropTypes.string.isRequired,
  as: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

const defaultProps = {
  as: 'h1',
  style: {
    textAlign: 'center',
    margin: '0 auto',
    textTransform: 'uppercase'
  }
}

const ProductDetailHeader = ({ title, ...props }) => (
  <Header {...props}>{title}</Header>
)

ProductDetailHeader.propTypes = propTypes
ProductDetailHeader.defaultProps = defaultProps
ProductDetailHeader.propList = {
  ...HeaderProps,
  props: HeaderProps.props.concat({
    name: 'title',
    type: 'string',
    description: 'Title of the product'
  })
}

export default ProductDetailHeader
