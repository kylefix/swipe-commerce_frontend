import React from 'react'
import PropTypes from 'prop-types'

import Canvas from './Canvas'

import { connect } from 'react-redux'

import { ActionCreators as UndoActionCreators } from 'redux-undo'

import {
  setCanvasLayout,
  setCanvasItem,
  addCanvasItem,
  removeCanvasItem,
  saveCanvas,
  fetchCanvasPage,
  setCanvasGridProps,
  setCanvasRowProps,
  changeComponentLayout,
  removeCanvasComponent,
  addCanvasComponent as addComponent
} from '../../../../reducers/admin'

import { getAvailableRows, getLastRow } from './helpers'

import { setPropertyAtPath } from '../../../../helpers/object'

import { DEFAULT_COLUMN } from './constants'

class CanvasContainer extends React.PureComponent {
  static propTypes = {
    changeComponentLayout: PropTypes.func.isRequired,
    removeCanvasComponent: PropTypes.func.isRequired,
    addCanvasComponent: PropTypes.func.isRequired,
    setCanvasGridProps: PropTypes.func.isRequired,
    setCanvasRowProps: PropTypes.func.isRequired,
    setCanvasLayout: PropTypes.func.isRequired,
    setCanvasItem: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    gridProps: PropTypes.object.isRequired,
    rowProps: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    nextKey: PropTypes.number.isRequired,
    onSave: PropTypes.func.isRequired,
    layout: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    pages: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
    onUndo: PropTypes.func.isRequired,
    onRedo: PropTypes.func.isRequired
  }

  state = {
    openModals: {},
    placeholders: [],
    activeGrid: true
  }

  componentDidMount () {
    if (!this.props.page) return this.props.onChangePage('cart')
    this.props.onChangePage(this.props.page)
  }

  handleAddColumn = rowIndex => {
    const emptySpots = getAvailableRows(this.props.layout, rowIndex)
    if (emptySpots.length === 1) return this.handlePickColumn(emptySpots[0])
    if (!emptySpots.length) return this.handleAddRow()

    this.setState({
      placeholders: emptySpots
    })
  }

  handlePickColumn = column => {
    const { nextKey } = this.props

    this.setState({
      nextKey: nextKey + 1
    })

    this.props.addItem({
      i: `new_${nextKey}`,
      ...column,
      ...DEFAULT_COLUMN,
      props: {
        width: 1,
        children: []
      }
    })
  }

  handleAddRow = () => {
    const { nextKey } = this.props

    const newItem = {
      i: `new_${nextKey}`,
      x: 0,
      y: getLastRow(this.props.layout) + 1,
      ...DEFAULT_COLUMN,
      props: {
        width: 1,
        children: []
      }
    }

    this.props.addItem(newItem)
  }

  handleLayoutChange = layout => {
    this.setState({ placeholders: [] })
    if (JSON.stringify(this.props.layout) !== JSON.stringify(layout)) {
      this.props.setCanvasLayout(layout)
    }
  }

  handleSetModal = (value, key) => {
    this.setState({
      openModals: {
        ...this.state.openModals,
        [key]: value
      },
      activeGrid: !value
    })
  }

  getChildren = (name, item, items) => {
    switch (name) {
      case 'column':
        return item.props.children
      case 'grid':
        return []
      default:
        const column = item.props.children.find(child => child.type === name)
        return column.props ? column.props.children : []
    }
  }

  handleSubmitGridProps = props => {
    const updatedProps = {
      ...Object.entries(props).reduce(
        (acc, [key, value]) =>
          value !== null ? { ...acc, [key]: value } : acc,
        {}
      )
    }

    this.props.setCanvasGridProps(updatedProps)
    return this.handleOnSave()
  }

  handleSubmitRowProps = (props, i) => {
    const updatedProps = {
      ...Object.entries(props).reduce(
        (acc, [key, value]) =>
          value !== null ? { ...acc, [key]: value } : acc,
        {}
      )
    }

    this.props.setCanvasRowProps(updatedProps, i)
    return this.handleOnSave()
  }

  handleSubmitProps = (props, i, name) => {
    this.setState({ openModals: {} })
    if (name === 'grid') return this.handleSubmitGridProps(props, i)
    if (Number.isInteger(name)) return this.handleSubmitRowProps(props, i)

    const itemIndex = this.props.items.findIndex(item => item.i === i)
    if (!~itemIndex) throw new Error(`Item not found! ${i}`)

    const item = this.props.items[itemIndex]
    const children = this.getChildren(name, item)

    const updatedProps = {
      children: children || [],
      ...Object.entries(props).reduce(
        (acc, [key, value]) =>
          value !== null ? { ...acc, [key]: value } : acc,
        {}
      )
    }

    if (name === 'column') {
      const updatedItem = setPropertyAtPath(item, updatedProps, 'props')
      this.props.setCanvasItem(updatedItem, itemIndex)
      return this.handleOnSave()
    }

    const childIndex = item.props.children.findIndex(
      child => child.type === name
    )
    const updatedChildren = [...item.props.children]

    updatedChildren[childIndex] = {
      ...item.props.children[childIndex],
      props: updatedProps
    }

    console.log({ updatedChildren })

    const updatedItem = setPropertyAtPath(
      item,
      updatedChildren,
      'props.children'
    )

    console.log({ updatedItem })

    this.props.setCanvasItem(updatedItem, itemIndex)
    return this.handleOnSave()
  }

  handleOnSave = () => {
    this.setState({ activeGrid: true })
    this.props.onSave(this.props.page)
  }

  render () {
    return (
      <Canvas
        removeCanvasComponent={this.props.removeCanvasComponent}
        addCanvasComponent={this.props.addCanvasComponent}
        changeComponentLayout={this.props.changeComponentLayout}
        onLayoutChange={this.handleLayoutChange}
        onSubmitProps={this.handleSubmitProps}
        onChangePage={this.props.onChangePage}
        placeholders={this.state.placeholders}
        onPickColumn={this.handlePickColumn}
        onRemoveItem={this.props.removeItem}
        onAddColumn={this.handleAddColumn}
        activeGrid={this.state.activeGrid}
        openModals={this.state.openModals}
        gridProps={this.props.gridProps}
        setModal={this.handleSetModal}
        rowProps={this.props.rowProps}
        onAddRow={this.handleAddRow}
        layout={this.props.layout}
        onSave={this.handleOnSave}
        items={this.props.items}
        onUndo={this.props.onUndo}
        onRedo={this.props.onRedo}
        canUndo={this.props.canUndo}
        canRedo={this.props.canRedo}
        pages={this.props.pages}
        page={this.props.page}
      />
    )
  }
}

const mapStateToProps = state => ({
  canUndo: state.admin.canvas.past.length > 0,
  canRedo: state.admin.canvas.future.length > 0,
  layout: state.admin.canvas.present.layout,
  items: state.admin.canvas.present.items,
  gridProps: state.admin.canvas.present.gridProps,
  rowProps: state.admin.canvas.present.rowProps,
  nextKey: state.admin.canvas.present.nextKey,
  page: state.admin.canvas.present.page,
  pages: state.pages.pages
})

const mapDispatchToProps = d => ({
  changeComponentLayout: (props, index) =>
    d(changeComponentLayout(props, index)),
  setCanvasRowProps: (props, index) => d(setCanvasRowProps(props, index)),
  removeCanvasComponent: (componenti, i) =>
    d(removeCanvasComponent(componenti, i)),
  addCanvasComponent: (component, index) => d(addComponent(component, index)),
  setCanvasItem: (item, index) => d(setCanvasItem(item, index)),
  setCanvasGridProps: props => d(setCanvasGridProps(props)),
  setCanvasLayout: layout => d(setCanvasLayout(layout)),
  onChangePage: value => d(fetchCanvasPage(value)),
  addItem: item => d(addCanvasItem(item)),
  removeItem: i => d(removeCanvasItem(i)),
  onSave: page => d(saveCanvas(page)),
  onUndo: () => d(UndoActionCreators.undo()),
  onRedo: () => d(UndoActionCreators.redo())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasContainer)
