import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormInputProps from '../../propTypes/FormInput.info.json'
import FormFieldProps from '../../propTypes/FormField.info.json'
import IconProps from '../../propTypes/Icon.info.json'

import { Form } from 'semantic-ui-react'

const withoutStyle = ({ style, ...props }) => props

class SearchBar extends Component {
  state = {
    searchInput: ''
  }

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    icon: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    fluid: PropTypes.bool
  }

  static defaultProps = {
    style: { width: '600px', alignText: 'center', margin: '0 auto' },
    size: 'huge',
    icon: 'search',
    placeholder: 'Search...',
    fluid: true
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ searchInput: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.context.router.history.push(`/search/${this.state.searchInput}`)
  }

  render () {
    return (
      <Form style={this.props.style} onSubmit={this.handleSubmit}>
        <Form.Input
          {...withoutStyle(this.props)}
          onChange={this.handleChange}
          value={this.state.searchInput}
        />
      </Form>
    )
  }
}

const iconProps = IconProps.props.find(prop => prop.name === 'icon')
const sizeProps = IconProps.props.find(prop => prop.name === 'size')

SearchBar.propList = {
  ...FormInputProps,
  props: FormInputProps.props.concat(
    FormFieldProps.props,
    sizeProps,
    iconProps,
    {
      name: 'placeholder',
      type: 'string',
      description: 'The text to displayed'
    },
    {
      name: 'fluid',
      type: 'bool',
      description: ''
    }
  )
}

export default SearchBar
