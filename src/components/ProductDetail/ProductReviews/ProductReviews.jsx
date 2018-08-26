import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'

import ReviewDetails from './ReviewDetails/ReviewDetails'
import ContainerProps from '../../../propTypes/Container.info.json'

const getContainerProps = ({ reviews, submitReview, productId, ...props }) =>
  props

class ProductReviews extends Component {
  static propTypes = {
    reviews: PropTypes.array.isRequired,
    submitReview: PropTypes.func.isRequired,
    productId: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  }

  static defaultProps = {
    style: { margin: '2rem 0' }
  }

  render () {
    return (
      <Container {...getContainerProps(this.props)}>
        <Header as="h1" textAlign="center">
          {this.props.reviews.length} Reviews
        </Header>
        <ReviewDetails
          reviews={this.props.reviews}
          submitReview={this.props.submitReview}
          productId={this.props.productId}
        />
      </Container>
    )
  }
}

ProductReviews.propList = ContainerProps

export default ProductReviews

// const ReviewButton = () => (
//   <Button
//     style={{
//       marginTop: '2rem',
//       color: 'white',
//       backgroundColor: 'black',
//       width: '12rem',
//       height: '3rem'
//     }}
//   >
//     Write a Review
//   </Button>
// )
