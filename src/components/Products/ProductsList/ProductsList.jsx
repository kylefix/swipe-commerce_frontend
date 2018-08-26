import React from 'react'
import { Grid, Header, Card, Button, Breadcrumb } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ProductItem from './ProductItem/ProductItem'

const ProductsList = ({ products, active }) => {
  let renderProducts = !products.length ? (
    <Header as="h2" color="grey" textAlign="center" style={{ width: '100%' }}>
      Nothing Found. Please try again
    </Header>
  ) : (
    products.map((product, idx) => <ProductItem product={product} key={idx} />)
  )

  return (
    <>
      {/* <div style={{ textAlign: 'center', margin: '0em 0 1em 0' }}>
        <Header as="h1" style={{ color: '#111', fontSize: '2.44em' }}>
          {active || 'Products'}
        </Header>
      </div> */}
      <Grid.Column width={13}>
        <Card.Group
          style={{
            display: 'flex',
            marginBottom: '2rem'
          }}
        >
          {renderProducts}
        </Card.Group>
      </Grid.Column>
    </>
  )
}

export default ProductsList
