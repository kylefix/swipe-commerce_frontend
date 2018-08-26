import React from 'react'

import { Grid } from 'semantic-ui-react'
import ProductPhotos from './ProductPhotos'
import ReviewButton from './ReviewButtonAndModal'
import ProductDetailHeader from './ProductDetailHeader'
import ProductDetailRating from './ProductDetailRating'
import ProductDetailPrice from './ProductDetailPrice'
import ProductDetailDescription from './ProductDetailDescription'
import ProductDetailAddToCart from './ProductDetailAddToCart'
import ProductReviews from './ProductReviews/ProductReviews'

export const element = {
  type: 'Grid',
  props: {
    divided: 'vertically',
    style: {
      padding: '3em'
    },
    children: [
      {
        type: 'Grid.Row',
        props: {
          children: [
            {
              type: 'Grid.Column',
              props: {
                width: 5,
                children: [
                  {
                    type: 'ProductPhotos',
                    props: {
                      product: '#product',
                      changePhoto: '#handleChange',
                      currentPhotoIndex: '#currentPhotoIndex'
                    }
                  },
                  {
                    type: 'ReviewButton',
                    props: {
                      submitReview: '#submitReview',
                      productId: '#product._id'
                    }
                  }
                ]
              }
            },
            {
              type: 'Grid.Column',
              props: {
                width: 2,
                children: []
              }
            },
            {
              type: 'Grid.Column',
              props: {
                fluid: true,
                width: 6,
                children: [
                  {
                    type: 'ProductDetailHeader',
                    props: {
                      title: '#product.title'
                    }
                  },
                  {
                    type: 'ProductDetailRating',
                    props: {
                      defaultRating: '#averageReview'
                    }
                  },
                  {
                    type: 'ProductDetailPrice',
                    props: {
                      price: '#product.price'
                    }
                  },
                  {
                    type: 'ProductDetailDescription',
                    props: {
                      description: '#product.description'
                    }
                  }
                ]
              }
            },
            {
              type: 'Grid.Column',
              props: {
                width: 3,
                stretched: true,
                verticalAlign: 'bottom',
                children: [
                  {
                    type: 'ProductDetailAddToCart',
                    props: {
                      onClick: '#addToCart',
                      product: '#product'
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: 'Grid.Row',
        props: {
          children: [
            {
              type: 'Grid.Column',
              props: {
                width: 16,
                children: [
                  {
                    type: 'ProductReviews',
                    props: {
                      reviews: '#reviews',
                      submitReview: '#submitReview',
                      productId: '#product._id'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}

export const dependencies = {
  '': React.Fragment,
  Grid: Grid,
  'Grid.Row': Grid.Row,
  'Grid.Column': Grid.Column,
  ProductPhotos,
  ReviewButton,
  ProductDetailHeader,
  ProductDetailRating,
  ProductDetailPrice,
  ProductDetailDescription,
  ProductDetailAddToCart,
  ProductReviews
}

export const components = {
  ProductPhotos,
  ReviewButton,
  ProductDetailHeader,
  ProductDetailRating,
  ProductDetailPrice,
  ProductDetailDescription,
  ProductDetailAddToCart,
  ProductReviews
}
