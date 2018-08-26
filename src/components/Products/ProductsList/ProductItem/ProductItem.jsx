import React from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => (
  <Card
    style={{
      border: '1px solid rgba(32, 132, 207, 0.05)',
      borderRadius: '1em',
      marginTop: '2em',
      boxShadow:
        '0px 0px 0px 0px #D4D4D5, 0px 0px 0px 0px rgba(34, 36, 38, 0.12), 0px 0px 50px 0px rgba(34, 36, 38, 0.03)'
    }}
  >
    <div
      style={{
        display: 'flex',
        padding: '1em',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '221px',
        width: '100%'
      }}
    >
      <Image
        src={product.images[0]}
        style={{ maxHeight: '100%', margin: '0 auto' }}
      />
    </div>
    <Card.Content
      style={{
        borderTop: 'none',
        padding: '14px',
        borderBottomRightRadius: '1em',
        borderBottomLeftRadius: '1em',
        backgroundColor: 'rgba(32, 132, 207, 0.05)'
      }}
    >
      <Rating
        icon="star"
        style={{ float: 'right' }}
        defaultRating={+product.rating}
        maxRating={5}
        disabled
      />
      <Card.Header>
        <Link to={`/product/${product._id}`}>{product.title}</Link>
      </Card.Header>
      <Card.Meta>${product.price}</Card.Meta>
    </Card.Content>
  </Card>
)
// < Card raised style = {{ margin: '1em 1em' }}>
//   <Card.Content>
//     <Rating
//       style={{ float: 'right' }}
//       icon="star"
//       defaultRating={+review.rating}
//       maxRating={5}
//       disabled
//       size="large"
//     />
//     <Card.Header>{review.review}</Card.Header>
//     <Card.Meta>{review.date}</Card.Meta>
//     <Card.Description>{truncate(review.content, 70)}</Card.Description>
//   </Card.Content>
// </Card >
export default ProductItem
