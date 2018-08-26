import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from 'semantic-ui-react'

import ReviewList from './ReviewList'

const propTypes = {
  reviews: PropTypes.array.isRequired
}

const style = { margin: '0 auto', display: 'block' }

const ReviewDetails = ({ reviews }) => (
  <Grid style={style}>
    <ReviewList reviews={reviews} />
  </Grid>
)

ReviewDetails.propTypes = propTypes

export default ReviewDetails
