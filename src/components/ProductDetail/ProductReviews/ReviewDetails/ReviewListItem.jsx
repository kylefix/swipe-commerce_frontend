import React from 'react'
import PropTypes from 'prop-types'

import { Rating, Card } from 'semantic-ui-react'

const propTypes = {
  review: PropTypes.object.isRequired
}

const truncate = (string, limit) =>
  string.length > limit ? string.substring(0, limit) + '...' : string

const ReviewListItem = ({ review }) => (
  <Card raised style={{ margin: '1em 1em' }}>
    <Card.Content>
      <Rating
        style={{ float: 'right' }}
        icon="star"
        defaultRating={+review.rating}
        maxRating={5}
        disabled
        size="large"
      />
      <Card.Header>{review.review}</Card.Header>
      <Card.Meta>{review.date}</Card.Meta>
      <Card.Description>{truncate(review.content, 70)}</Card.Description>
    </Card.Content>
  </Card>
)

ReviewListItem.propTypes = propTypes

export default ReviewListItem
