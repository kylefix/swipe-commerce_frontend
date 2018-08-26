import React from 'react'
import PropTypes from 'prop-types'

import { Rating } from 'semantic-ui-react'

import RatingProps from '../../propTypes/Rating.info.json'

const propTypes = {
  defaultRating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.string
}

const defaultProps = {
  maxRating: 5,
  disabled: true,
  size: 'large',
  icon: 'star'
}

const ProductDetailRating = ({ defaultRating, ...props }) => (
  <Rating defaultRating={+defaultRating} {...props} />
)

ProductDetailRating.propTypes = propTypes
ProductDetailRating.defaultProps = defaultProps
ProductDetailRating.propList = {
  ...RatingProps
}

export default ProductDetailRating
