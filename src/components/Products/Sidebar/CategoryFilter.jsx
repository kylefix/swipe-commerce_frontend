import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import PropTypes from 'prop-types'

const propTypes = {
  setCategoryFilter: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

class CategoryFilter extends Component {
  state = {
    value: ''
  }

  handleChange = (e, { value }) =>
    this.setState({ value }, () => this.props.setCategoryFilter(value))

  renderCategoriesOptions = () =>
    [
      {
        key: '',
        value: '',
        text: ''
      }
    ].concat(
      this.props.categories.map(c => ({
        key: c.id,
        value: c.id,
        text: c.name
      }))
    )

  render () {
    return (
      <Dropdown
        fluid
        value={this.state.value}
        placeholder="Select a category"
        options={this.renderCategoriesOptions()}
        onChange={this.handleChange}
      />
    )
  }
}

CategoryFilter.propTypes = propTypes

export default CategoryFilter
