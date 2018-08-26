import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const propTypes = {
  highest: PropTypes.number.isRequired,
  lowest: PropTypes.number.isRequired,
  value: PropTypes.object.isRequired,
  setPriceFilter: PropTypes.func.isRequired
}

class PriceFilter extends Component {
  handleChange = value => {
    this.props.setPriceFilter(value)
  }

  render () {
    return (
      <div style={{ padding: '2em' }}>
        <InputRange
          minValue={Math.floor(this.props.lowest)}
          maxValue={Math.ceil(this.props.highest)}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

PriceFilter.propTypes = propTypes

export default PriceFilter
