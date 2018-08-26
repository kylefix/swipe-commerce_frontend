import React from 'react'
import PropTypes from 'prop-types'

import InteractiveProps from './InteractiveProps'

import dependencies from '../../../../../dependencies'

import GridRowTypes from '../../../../../../propTypes/GridRow.info.json'

import { Menu, Icon, Form, Modal } from 'semantic-ui-react'

import objectToCss from '../../../../../../helpers/objectToCss'

import ComponentPicker from './ComponentPicker'

import ComponentManager from './ComponentManager'

import componentList from '../../../../../components'

const withoutChildren = ({ children, ...props }) => props

const getComponent = name => {
  const groups = Object.keys(componentList)
  const components = groups.reduce(
    (acc, group) => ({ ...acc, ...componentList[group] }),
    {}
  )
  const found = Object.keys(components).find(comp => comp === name)
  if (!~found) throw new Error(`Could not find component ${name}`)
  return components[found]
}

class InteractiveColumnSettings extends React.PureComponent {
  state = {
    currentComponent: this.props.initial
  }

  static propTypes = {
    changeComponentLayout: PropTypes.func.isRequired,
    removeCanvasComponent: PropTypes.func.isRequired,
    addCanvasComponent: PropTypes.func.isRequired,
    column: PropTypes.object.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
    onSubmitProps: PropTypes.func.isRequired,
    i: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    trigger: PropTypes.func.isRequired,
    rowProps: PropTypes.array,
    initial: PropTypes.string.isRequired
  }

  renderChildComponents = children =>
    children.map((child, index) => (
      <Menu.Item
        onClick={() => this.handleChangeComponent(child.type)}
        name={child.type}
        key={index}
        active={this.state.currentComponent === child.type}
      />
    ))

  renderRowComponents = rowProps =>
    rowProps.map((child, index) => (
      <Menu.Item
        onClick={() => this.handleChangeRow(index)}
        name={`Row ${index.toString()}`}
        key={index}
        active={this.state.currentComponent === index}
      />
    ))

  handleChangeRow = index => {
    this.setState({ currentComponent: index })
  }

  handleAddComponent = component => {
    this.props.addCanvasComponent(component, this.props.i)
  }

  handleChangeComponent = type => {
    this.setState({ currentComponent: type })
  }

  handleModalOpen = () => {
    this.props.setModal(true, this.props.column.i)
  }

  handleModalClose = () => {
    this.props.setModal(false, this.props.column.i)
  }

  renderColumnProps = current => (
    <InteractiveProps
      key={current}
      i={this.props.i}
      id={current}
      onSubmit={this.props.onSubmitProps}
      props={withoutChildren(this.props.column.props)}
      types={this.props.column.props.types}
    />
  )

  renderRowProps = index => (
    <InteractiveProps
      key={index}
      i={index}
      id={index}
      onSubmit={this.props.onSubmitProps}
      props={withoutChildren(this.props.rowProps[index])}
      types={GridRowTypes.props}
    />
  )

  renderManager = () => {
    const layout = this.props.column.props.children.map((child, index) => ({
      x: 0,
      y: index,
      w: 1,
      h: 1,
      i: child.type,
      type: child.type,
      props: child.props || {}
    }))
    console.log({ layout })
    return (
      <div style={{ width: '200px' }}>
        <ComponentManager
          onRemove={this.props.removeCanvasComponent}
          onLayoutChange={this.props.changeComponentLayout}
          i={this.props.column.i}
          layout={layout}
        />
      </div>
    )
  }

  renderInteractiveProps = () => {
    if (this.props.column.i === 'grid') {
      if (Number.isFinite(this.state.currentComponent)) {
        return this.renderRowProps(this.state.currentComponent)
      }
      this.setState({ currentComponent: 'grid' })
      return this.renderColumnProps('grid')
    }
    const current = this.state.currentComponent
    const page = this.props.page
    if (current === 'column') {
      return this.renderColumnProps('column')
    }
    const Component = dependencies[page][current] || getComponent(current)

    // prettier-ignore
    const props = {
      ...{...Component.defaultProps || {}},
      ...this.props.column.props.children
        .find(child => child.type === current).props
    }

    if (props.style && typeof props.style !== 'string') {
      props.style = objectToCss(props.style)
    }

    console.log({ Component })

    const types = Component.propList.props
    return (
      <InteractiveProps
        key={current}
        i={this.props.i}
        id={current}
        onSubmit={this.props.onSubmitProps}
        props={withoutChildren(props)}
        types={types}
        name={Component.propList.displayName}
      />
    )
  }

  render () {
    const Trigger = this.props.trigger
    const renderSettingsIcon = <Trigger onClick={this.handleModalOpen} />
    return (
      <Modal
        size="large"
        dimmer
        trigger={renderSettingsIcon}
        onClose={this.handleModalClose}
        open={this.props.modalOpen}
      >
        <Modal.Header style={{ border: 'none' }}>Settings</Modal.Header>
        <Menu tabular>
          <Menu.Item
            name="Column"
            onClick={() => this.handleChangeComponent('column')}
            active={['grid', 'column'].includes(this.state.currentComponent)}
          />
          {this.renderChildComponents(this.props.column.props.children)}
          {this.props.i === 'grid' &&
            this.renderRowComponents(this.props.rowProps)}
          {this.props.i !== 'grid' && (
            <ComponentPicker
              trigger={
                <Menu.Item>
                  <Icon name="plus" color="green" />
                  Add Component
                </Menu.Item>
              }
              onSubmit={this.handleAddComponent}
            />
          )}
        </Menu>
        <Modal.Content scrolling>
          {this.renderInteractiveProps()}
          <div style={{ float: 'left' }}>{this.renderManager()}</div>
        </Modal.Content>
        <Modal.Actions>
          <Form.Button as="" form={this.state.currentComponent} color="green">
            Save <Icon name="chevron right" />
          </Form.Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default InteractiveColumnSettings
