import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'semantic-ui-react'
import ReviewListItem from './ReviewListItem'

const propTypes = {
  reviews: PropTypes.array.isRequired
}

const ReviewList = ({ reviews }) => {
  if (!reviews.length) {
    return (
      <p style={{ color: 'grey', margin: '6rem 0', fontSize: '1.5rem' }}>
        This product has no reviews, yet. Be the first to write a review
      </p>
    )
  }

  return (
    <List
      style={{
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
      }}
    >
      {reviews.map((review, idx) => (
        <ReviewListItem review={review} key={idx} />
      ))}
    </List>
  )
}

ReviewList.propTypes = propTypes

export default ReviewList
