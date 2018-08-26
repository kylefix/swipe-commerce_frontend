import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  description: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

const defaultProps = {
  style: { fontSize: '1.2rem', marginTop: '1rem' }
}

const ProductDetailDescription = ({ description, ...props }) => (
  <p {...props}>{description}</p>
)

ProductDetailDescription.propTypes = propTypes
ProductDetailDescription.defaultProps = defaultProps
ProductDetailDescription.propList = {
  props: [
    {
      name: 'description',
      type: 'string',
      description: 'The text to display as product description'
    },
    {
      name: 'style',
      type: 'string'
    }
  ]
}

export default ProductDetailDescription
