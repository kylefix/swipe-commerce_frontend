import React, { Component } from 'react'
import { Header, Divider, Menu, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import {
  setCategoryFilter,
  setPriceFilter,
  setFilter
} from '../../../reducers/seller'

import FilterTitle from './FilterTitle'
import SidebarSearch from './SidebarSearch'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

class Sidebar extends Component {
  handleSetPriceFilter = value => {
    this.props.setPriceFilter({ minVal: value.min, maxVal: value.max })
  }

  render () {
    return (
      <Segment
        basic
        style={{
          marginLeft: '-14px',
          backgroundColor: 'rgba(32, 132, 207, 0.05)'
        }}
      >
        <Menu
          style={{
            flex: 1,
            border: 'none',
            paddingTop: '0.3em',
            borderRadius: '1em',
            boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.03)'
          }}
          vertical
          fluid
        >
          <Header
            as="h2"
            style={{ color: '#666', margin: '1em 1em' }}
            textAlign="center"
          >
            Filter Your Results
          </Header>
          <div style={{ margin: '1rem' }}>
            <SidebarSearch setFilter={this.props.setFilter} />
            <Divider />
            <FilterTitle>Filter by Category</FilterTitle>
            <CategoryFilter
              setCategoryFilter={this.props.setCategoryFilter}
              categories={this.props.categories}
            />
            <Divider />
            <FilterTitle>Filter by Price</FilterTitle>
            <PriceFilter
              value={{
                min: this.props.minVal,
                max: this.props.maxVal
              }}
              setPriceFilter={this.handleSetPriceFilter}
              highest={this.props.highest}
              lowest={this.props.lowest}
            />
          </div>
        </Menu>
        <Link to="/">
          <Button
            style={{
              boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.2)'
            }}
            fluid
            positive
            size="tiny"
            circular
            content="Back"
            icon="left arrow"
            labelPosition="left"
          />
        </Link>
      </Segment>
    )
  }
}

const sidebarProptypes = {
  setCategoryFilter: PropTypes.func.isRequired,
  setPriceFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  lowest: PropTypes.number.isRequired,
  highest: PropTypes.number.isRequired,
  price: PropTypes.object.isRequired
}
Sidebar.propTypes = sidebarProptypes

const mapStateToProps = state => {
  const categories = state.categories.list.map(c => ({
    id: c._id,
    name: c.name
  }))

  return {
    categories,
    price: state.seller.filter.price,
    minVal: state.seller.filter.price.minVal,
    maxVal: state.seller.filter.price.maxVal
  }
}

const mapDispatchToProps = dispatch => ({
  setCategoryFilter: filter =>
    dispatch(setCategoryFilter({ category: filter })),
  setPriceFilter: filter => dispatch(setPriceFilter({ price: filter })),
  setFilter: filter => dispatch(setFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
