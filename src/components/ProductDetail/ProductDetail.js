// import React from 'react'
import PropTypes from 'prop-types'
// import { Grid } from 'semantic-ui-react'

import { dependencies } from './default'
import createReactElement from '../../helpers/createReactElement'

// import ProductPhotos from './ProductPhotos'
// import ReviewButton from './ReviewButtonAndModal'
// import ProductDetailPrice from './ProductDetailPrice'
// import ProductDetailRating from './ProductDetailRating'
// import ProductDetailHeader from './ProductDetailHeader'
// import ProductReviews from './ProductReviews/ProductReviews'
// import ProductDetailAddToCart from './ProductDetailAddToCart'
// import ProductDetailDescription from './ProductDetailDescription'

const propTypes = {
  page: PropTypes.object.isRequired
}

const ProductDetail = createReactElement(dependencies, propTypes)

// const propTypes = {
//   product: PropTypes.object.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   currentPhotoIndex: PropTypes.number.isRequired,
//   averageReview: PropTypes.number.isRequired,
//   reviews: PropTypes.array.isRequired,
//   addToCart: PropTypes.func.isRequired,
//   submitReview: PropTypes.func.isRequired
// }

// const ProductDetail = ({
//   product,
//   handleChange,
//   currentPhotoIndex,
//   averageReview,
//   reviews,
//   addToCart,
//   submitReview
// }) => (
//   <Grid divided="vertically" style={{ padding: '3rem' }}>
//     <Grid.Row>
//       <Grid.Column width={5}>
//         <ProductPhotos
//           product={product}
//           changePhoto={handleChange}
//           currentPhotoIndex={currentPhotoIndex}
//         />
//         <ReviewButton submitReview={submitReview} productId={product._id} />
//       </Grid.Column>
//       <Grid.Column width={2} />
//       <Grid.Column fluid width={6}>
//         <ProductDetailHeader title={product.title} />
//         <ProductDetailRating defaultRating={averageReview} />
//         <ProductDetailPrice price={product.price} />
//         <ProductDetailDescription description={product.description} />
//       </Grid.Column>
//       <Grid.Column stretched verticalAlign="bottom" width={3}>
//         <ProductDetailAddToCart onClick={addToCart} product={product} />
//       </Grid.Column>
//     </Grid.Row>
//     {/* add divider */}
//     <Grid.Row>
//       <Grid.Column width={16}>
//         <ProductReviews
//           reviews={reviews}
//           submitReview={submitReview}
//           productId={product._id}
//         />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// )

// ProductDetail.propTypes = propTypes

export default ProductDetail
