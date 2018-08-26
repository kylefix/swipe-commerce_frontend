import React, { Component } from 'react'
import { Grid, Button, Breadcrumb } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar/Sidebar'
import ProductsList from './ProductsList/ProductsList'
import Loading from '../.common/Loading'

import { setPriceFilter } from '../../reducers/seller'

const getPriceRange = products => {
  const prices = products.map(product => product.price)
  return {
    highest: Math.max(...prices),
    lowest: Math.min(...prices)
  }
}

class Products extends Component {
  getPriceRange = () => {
    const prices = this.renderFilter().map(product => product.price)
    return {
      highest: Math.ceil(Math.max(...prices)),
      lowest: Math.floor(Math.min(...prices))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      const prices = this.getPriceRange()
      this.props.setPriceFilter({
        minVal: prices.lowest,
        maxVal: prices.highest
      })
    }
  }

  filterPrice = products =>
    products.filter(
      product =>
        [undefined, ''].includes(this.props.filter.price.maxVal)
          ? true
          : product.price >= this.props.filter.price.minVal &&
            product.price <= this.props.filter.price.maxVal
    )

  renderFilter = () => {
    return this.props.products
      .filter(
        product =>
          !this.props.filter.category ||
          product.categoryId === this.props.filter.category
      )
      .filter(
        product =>
          !this.props.filter.search ||
          product.title
            .split(' ')
            .map(w => w.toLowerCase())
            .some(word => word.includes(this.props.filter.search))
      )
  }

  render () {
    console.log('lowest', this.props.lowest)
    return (
      <Grid style={{ minHeight: '100vh', margin: '0px' }}>
        <Grid.Row style={{ padding: '0px' }} stretched>
          <Grid.Column width={4}>
            <Sidebar
              active={this.props.active}
              lowest={this.props.lowest}
              highest={this.props.highest}
            />
          </Grid.Column>
          <Grid.Column style={{ padding: '2em' }} width={12}>
            <Grid.Row
              style={{
                maxHeight: '50px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              {this.props.active && (
                <Breadcrumb>
                  <Breadcrumb.Section link>Home</Breadcrumb.Section>
                  <Breadcrumb.Divider icon="right angle" />
                  <Breadcrumb.Section link>
                    {this.props.active}
                  </Breadcrumb.Section>
                </Breadcrumb>
              )}
            </Grid.Row>
            <Grid.Row style={{ width: '100%' }}>
              {this.props.loading ? (
                <Loading />
              ) : (
                <ProductsList
                  active={this.props.active}
                  products={this.filterPrice(this.renderFilter())}
                />
              )}
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const calculateAverageReview = reviews =>
  reviews.reduce((acc, curr, idx, arr) => {
    const { rating } = curr
    const total = acc + rating
    if (idx === arr.length - 1) {
      return total / arr.length
    }
    return total
  }, 0)

const mapStateToProps = state => {
  const { products, loading } = state.products
  const { filter } = state.seller

  return {
    products,
    loading,
    filter,
    ...getPriceRange(products)
  }
}

const mapDispatchToProps = dispatch => ({
  setPriceFilter: filter => dispatch(setPriceFilter({ price: filter }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
