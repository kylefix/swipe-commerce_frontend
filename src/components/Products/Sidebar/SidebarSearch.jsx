import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
  setFilter: PropTypes.func.isRequired
}

class SidebarSearch extends Component {
  state = {
    value: ''
  }

  handleChange = (e, { value }) => {
    this.setState({ value }, () =>
      this.props.setFilter({ search: value.toLowerCase() })
    )
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          onChange={this.handleChange}
          value={this.state.value}
          size='tiny'
          icon='search'
          placeholder='Search in results...'
        />
      </Form>
    )
  }
}

SidebarSearch.propTypes = propTypes

export default SidebarSearch
