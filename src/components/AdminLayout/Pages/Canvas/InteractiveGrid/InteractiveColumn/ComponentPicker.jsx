import React from 'react'
import PropTypes from 'prop-types'
import components from '../../../../../components'

import { Header, Popup, Dropdown, Button } from 'semantic-ui-react'

export default class ComponentPicker extends React.Component {
  state = {
    group: null,
    value: null,
    isOpen: false
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    trigger: PropTypes.func.isRequired
  }

  handleGroupSelect = (_, { value }) => this.setState({ group: value })
  handleValueSelect = (_, { value }) => this.setState({ value: value })
  handleSubmit = () => {
    this.setState({ isOpen: false })
    if (this.state.group && this.state.value) {
      this.props.onSubmit(this.state.value)
    }
  }
  handleOpen = () => this.setState({ isOpen: true })
  handleClose = () => this.setState({ isOpen: false })

  renderValues = () => {
    let componentList = {}
    let options = {}
    if (this.state.group) {
      componentList = Object.keys(components[this.state.group])
      options = componentList.map(component => ({
        key: component,
        text: component.charAt(0).toUpperCase() + component.slice(1),
        value: component
      }))
    }

    return (
      <Dropdown
        disabled={!this.state.group}
        options={options}
        placeholder="Choose Component"
        onChange={this.handleValueSelect}
        fluid
        search
        selection
      />
    )
  }

  render () {
    const groups = Object.keys(components)
    const options = groups.map(group => ({
      key: group,
      text: group.charAt(0).toUpperCase() + group.slice(1),
      value: group
    }))

    return (
      <Popup
        trigger={this.props.trigger}
        style={{ width: '250px', height: '250px' }}
        on="click"
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
      >
        <Header as="h4">Choose A Component</Header>
        <Dropdown
          style={{ marginBottom: '1em' }}
          options={options}
          placeholder="Choose Component Group"
          onChange={this.handleGroupSelect}
          fluid
          search
          selection
        />
        {this.renderValues()}
        <Button
          fluid
          color="green"
          style={{ marginTop: '4.5em' }}
          onClick={this.handleSubmit}
        >
          Add
        </Button>
      </Popup>
    )
  }
}
