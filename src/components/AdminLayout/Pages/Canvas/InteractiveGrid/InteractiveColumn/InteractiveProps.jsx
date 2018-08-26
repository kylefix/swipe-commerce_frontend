import React from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Popup,
  Grid,
  Header,
  Dropdown,
  Label,
  Icon
} from 'semantic-ui-react'
import CssEditor from './CssEditor'

import { spaceCase } from '../../helpers'

import GridColumn from '../../../../../../propTypes/GridColumn.info.json'

const withoutWidth = props =>
  [
    {
      name: 'style',
      description: 'Style your component with css',
      type: 'string'
    }
  ].concat(props.filter(prop => prop.name !== 'width'))

class InteractiveProps extends React.Component {
  state = {
    currentProp: ''
  }

  static propTypes = {
    props: PropTypes.object.isRequired,
    types: PropTypes.array,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    i: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string
  }

  static defaultProps = {
    name: ''
  }

  componentDidMount () {
    const { props, types } = this.props
    withoutWidth(types || GridColumn.props).forEach(prop => {
      this.setState({
        [prop.name]: prop.name in props ? props[prop.name] : null
      })
    })
  }

  handleChange = (key, value) => {
    if (value === null) {
      const type = (this.props.types || GridColumn.props).find(
        type => type.name === key
      ).type
      if (type.includes('bool')) {
        value = false
      }
    }
    this.setState({
      [key]: value
    })
  }

  renderInputElement = () => {
    if (!this.state.currentProp) return false
    const { props, types } = this.props
    const prop = withoutWidth(types || GridColumn.props).find(
      prop => prop.name === this.state.currentProp
    )
    const Wrapper = trigger => (
      <Popup key={prop.name} trigger={trigger} content={prop.description} />
    )

    if (prop.name === 'style') return false
    if (prop.name === 'children') return false
    if (prop.type === 'custom') {
      return Wrapper(this.renderStringProp(prop, props))
    }
    if (prop.type === 'node') return false
    if (prop.type === 'enum') return Wrapper(this.renderEnumProp(prop, props))
    if (prop.type === 'bool') return Wrapper(this.renderBoolProp(prop, props))
    if (prop.type === 'bool|enum') {
      return Wrapper(this.renderEnumProp(prop, props, true))
    }
    if (prop.type === 'enum|bool') {
      return Wrapper(this.renderEnumProp(prop, props, true))
    }
    if (prop.type === 'string') {
      return Wrapper(this.renderStringProp(prop, props))
    }
    if (prop.type === 'array') {
      return Wrapper(this.renderStringProp(prop, props))
    }
    if (prop.type === 'object') {
      return Wrapper(this.renderStringProp(prop, props))
    }
    if (prop.type === 'number|string') {
      return Wrapper(this.renderStringProp(prop, props))
    }
    if (prop.type === 'func') return false
    throw new Error(`invalid prop? ${prop.type}`)
  }

  renderColumnPropTypes = () => {
    const { types } = this.props

    return withoutWidth(types || GridColumn.props).map((prop, index) => {
      const inputElement = this.renderInputElement(prop)
      return inputElement ? (
        <Popup key={index} trigger={inputElement} content={prop.description} />
      ) : (
        false
      )
    })
  }

  parseOptions = (values, selection, bool) => {
    const options = [
      {
        value: null
      }
    ].concat(
      values.map(value => ({
        key: value,
        text: value,
        value
      }))
    )

    bool &&
      options.push(
        { key: true, text: 'true', value: true },
        { key: false, text: 'false', value: false }
      )

    return options
  }

  renderStringProp = (prop, props) => {
    return (
      <Form.Input
        onChange={e => this.handleChange(prop.name, e.target.value)}
        value={this.state[prop.name] || ''}
        label={prop.name}
        type="text"
      />
    )
  }

  renderCssProp = () => {
    console.log(this.state.style)
    return (
      <CssEditor
        value={this.state.style}
        onChange={value => this.handleChange('style', value)}
      />
    )
  }

  renderEnumProp = (prop, props, bool = false) => {
    return (
      <Form.Dropdown
        onChange={(e, { value }) => this.handleChange(prop.name, value)}
        fluid
        search
        selection
        value={this.state[prop.name]}
        options={this.parseOptions(prop.value, this.state[prop.name], bool)}
        label={prop.name}
        type="text"
      />
    )
  }

  renderBoolProp = (prop, props) => {
    return (
      <Form.Dropdown
        onChange={(e, { value }) => this.handleChange(prop.name, value)}
        fluid
        search
        selection
        value={!!this.state[prop.name]}
        options={[
          {
            key: true,
            text: 'true',
            value: true
          },
          {
            key: false,
            text: 'false',
            value: false
          }
        ]}
        label={prop.name}
        type="text"
      />
    )
  }

  handleSubmit = () => {
    const props = { ...this.state }
    delete props.currentProp
    this.props.onSubmit(props, this.props.i, this.props.id)
  }

  renderPropList = () => {
    const { types } = this.props

    return withoutWidth(types || GridColumn.props).reduce(
      (acc, prop, index) => {
        if (['children', 'width', 'style'].includes(prop.name)) {
          return acc
        }
        const description = prop.description.toString()
        return acc.concat({
          key: prop.name,
          value: prop.name,
          text: spaceCase(prop.name),
          description:
            description.length > 35
              ? `${description.slice(0, 35)}...`
              : description
        })
      },
      []
    )
  }

  renderPropTag = name => (
    <Label
      color="blue"
      key={name}
      style={{ cursor: 'pointer' }}
      onClick={() => this.setState({ currentProp: name })}
    >
      {name}
      <Icon
        name="delete"
        onClick={e => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          this.handleChange(name, null)
        }}
      />
    </Label>
  )

  renderActiveProps = () => {
    const { types } = this.props

    return withoutWidth(types || GridColumn.props).reduce(
      (acc, prop, index) => {
        if (prop.type.includes('bool') && !this.state[prop.name]) return acc
        if (
          this.state[prop.name] === null ||
          ['children', 'width', 'style'].includes(prop.name)
        ) {
          return acc
        }
        return acc.concat(this.renderPropTag(prop.name))
      },
      []
    )
  }

  handlePropSelect = (_, { value }) => this.setState({ currentProp: value })

  render () {
    return (
      <>
        <Grid container columns={2}>
          <Grid.Column>
            <Grid.Row>
              <Header as="h4">CSS</Header>
            </Grid.Row>
            <Grid.Row>{this.renderCssProp()}</Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Header as="h4">{`Props${
                this.props.name ? `   <${this.props.name}>` : ''
              }`}</Header>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '2em' }}>
              {this.renderActiveProps()}
            </Grid.Row>
            <Grid.Row style={{ marginTop: '2em' }}>
              <Form id={this.props.id} onSubmit={this.handleSubmit}>
                <Dropdown
                  placeholder="Add Prop"
                  onChange={this.handlePropSelect}
                  fluid
                  search
                  selection
                  options={this.renderPropList()}
                >
                  {/* {Object.keys(this.state).length && this.renderColumnPropTypes()} */}
                </Dropdown>
                <Grid.Row style={{ marginTop: '2em' }}>
                  {this.renderInputElement()}
                </Grid.Row>
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default InteractiveProps
