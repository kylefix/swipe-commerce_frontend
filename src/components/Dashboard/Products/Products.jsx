import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Header, Button, Container } from 'semantic-ui-react'

import { fetchProducts } from '../../../reducers/seller'

import ProductList from './ProductList/ProductList'
import Loading from '../../.common/Loading'

const ProductHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const ListHeader = () => (
  <header style={ProductHeaderStyle}>
    <Header as="h1">Products</Header>
    <Button primary>
      <Link style={{ color: 'white' }} to="/dashboard/product/new">
        Add a Product
      </Link>
    </Button>
  </header>
)

const withHeader = ({ products }) => (
  <>
    <ListHeader />
    <ProductList products={products} />
  </>
)

const ProductListWithHeader = connect(state => ({
  products: Object.values(state.seller.products)
}))(withHeader)

class Products extends React.Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <Container style={{ margin: '2rem', padding: '0 2rem' }}>
        {this.props.loading ? <Loading /> : <ProductListWithHeader />}
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

const mapStateToProps = state => ({
  loading: state.seller.loading
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
