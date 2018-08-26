import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Image } from 'semantic-ui-react'

const thumbnailPropTypes = {
  photo: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}

const ProductThumbnail = ({ photo, idx, handleChange }) => (
  <Image
    src={photo}
    size="tiny"
    onClick={handleChange(idx)}
    style={{ cursor: 'pointer' }}
  />
)

ProductThumbnail.propTypes = thumbnailPropTypes

const propTypes = {
  style: PropTypes.string,
  product: PropTypes.object.isRequired,
  changePhoto: PropTypes.func.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired
}

const defaultProps = {
  style: { display: 'flex', flexDirection: 'row' }
}

const ProductPhotos = ({
  style,
  product,
  changePhoto,
  currentPhotoIndex,
  ...props
}) => {
  console.log('!!!!!!!!')
  console.log({ style })
  console.log(props)
  return (
    <Grid.Row columns={2} style={style} {...props}>
      <Grid.Column width={4}>
        <Image.Group
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          {product.images.map((photo, idx) => (
            <ProductThumbnail
              idx={idx}
              key={idx}
              photo={photo}
              handleChange={changePhoto}
            />
          ))}
        </Image.Group>
      </Grid.Column>
      <Grid.Column style={{ paddingLeft: '1.5em' }} width={12}>
        <Image src={product.images[currentPhotoIndex]} size="medium" />
      </Grid.Column>
    </Grid.Row>
  )
}

ProductPhotos.propTypes = propTypes
ProductPhotos.defaultProps = defaultProps
ProductPhotos.propList = {
  props: [
    {
      name: 'product',
      type: 'string',
      description: 'Object containing the product data'
    },
    {
      name: 'changePhoto',
      type: 'func',
      description: 'Function to handle the photo change'
    },
    {
      name: 'currentPhotoIndex',
      type: 'string',
      description: 'Variable containing the current index'
    }
  ]
}

export default ProductPhotos
