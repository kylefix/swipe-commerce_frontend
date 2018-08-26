import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProductDetail from './ProductDetail'

import { Loader, Dimmer, Container } from 'semantic-ui-react'

import { incrementCart } from '../../reducers/cart'
import { submitReview } from '../../reducers/reviews'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const mapStateToPageProp = state => ({
  page: state.pages.pages['productDetail']
})

const ProductDetailConnected = connect(mapStateToPageProp)(ProductDetail)

class ProductDetailHandler extends Component {
  state = {
    currentPhotoIndex: 0,
    averageReview: 0
  }

  static propTypes = {
    product: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    submitReview: PropTypes.func.isRequired
  }

  handleAddToCart = () => {
    toast.success(`${this.props.product.title}: added to cart!`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    })
    this.props.addToCart(this.props.product._id)
  }

  handleChange = idx => () => {
    this.setState({ currentPhotoIndex: idx })
  }

  parseReviews = () =>
    this.props.product.reviewIds.map(r => {
      const { content, createdAt, rating, review } = r
      const [year, month, day] = createdAt.split('-')

      return {
        review,
        content,
        date: `${day.slice(0, 2)}/${month}/${year}`,
        rating
      }
    })

  calculateAverageReview = () =>
    this.props.product.reviewIds.reduce((acc, curr, idx, arr) => {
      const { rating } = curr
      const total = acc + rating
      if (idx === arr.length - 1) {
        return total / arr.length
      }
      return total
    }, 0)

  renderLoading () {
    return (
      <Container style={{ minHeight: '100vh' }}>
        <Dimmer page active>
          <Loader active size="huge" />
        </Dimmer>
      </Container>
    )
  }

  renderProduct () {
    return (
      <>
        <ProductDetailConnected
          product={this.props.product}
          handleChange={this.handleChange}
          currentPhotoIndex={this.state.currentPhotoIndex}
          averageReview={this.calculateAverageReview()}
          reviews={this.parseReviews()}
          submitReview={this.props.submitReview}
          addToCart={this.handleAddToCart}
        />
        <ToastContainer
          bodyClassName="toast-container"
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </>
    )
  }

  render () {
    return this.props.loading ? this.renderLoading() : this.renderProduct()
  }
}

const mapStateToProps = state => {
  const { product, loading } = state.products
  return {
    product,
    loading
  }
}

const mapDispatchToProps = dispatch => ({
  submitReview: data => dispatch(submitReview(data)),
  addToCart: productId => dispatch(incrementCart(productId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailHandler)
