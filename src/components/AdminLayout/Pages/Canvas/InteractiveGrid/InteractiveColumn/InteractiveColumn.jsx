import React from 'react'
import PropTypes from 'prop-types'

import InteractiveColumnSettings from './InteractiveColumnSettings'

import { Popup, Icon, Label } from 'semantic-ui-react'

const propTypes = {
  changeComponentLayout: PropTypes.func.isRequired,
  removeCanvasComponent: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  addCanvasComponent: PropTypes.func.isRequired,
  column: PropTypes.object.isRequired,
  openModals: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  onSubmitProps: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
}

const iconStyle = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  margin: '0',
  cursor: 'pointer'
}

const segmentStyle = {
  marginTop: '1em',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

const settingsIconStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  margin: '0',
  cursor: 'pointer'
}

class ComponentLabel extends React.Component {
  render () {
    const fontSize = this.props.fontSize
    return (
      <div
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <div
          style={{
            fontSize: fontSize,
            lineHeight: `${fontSize}px`,
            color: 'rgb(101, 101, 101)'
          }}
        >
          {this.props.child}
        </div>
      </div>
    )
  }
}

class ComponentLabelContainer extends React.Component {
  state = {
    width: 0
  }

  constructor () {
    super()
    this.ref = React.createRef()
  }

  componentDidMount () {
    const width = this.ref.current.clientWidth
    this.setState({ width })
  }

  componentDidUpdate () {
    const width = this.ref.current.clientWidth
    if (this.state.width !== width) {
      this.setState({ width })
    }
  }

  render () {
    const minSizes = {
      1: 18,
      2: 16,
      3: 14
    }
    const numberOfElements = Math.min(
      3,
      this.props.column.props.children.length
    )
    const adjustedSize = this.state.width / 30 / (0.15 * numberOfElements + 1)
    const fontSize = Math.max(adjustedSize, minSizes[numberOfElements])

    return (
      <div
        ref={this.ref}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%',
          padding: '1em',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        {getComponentLabels(this.props.column, fontSize)}
      </div>
    )
  }
}

const getComponentLabels = (column, fontSize) => {
  const children = column.props.children
  return [...Array(Math.min(3, children.length))].map((_, index) => (
    <ComponentLabel
      fontSize={fontSize}
      child={`${children[index].type}${
        children.length > 3 && index === 2 ? '...' : ''
      }`}
      key={index}
    />
  ))
}

const getName = column =>
  column.props.children.map((child, index) => (
    <div key={index}>{child.type}</div>
  ))

const SettingsIcon = props => (
  <Label color="blue" corner="left" {...props} style={settingsIconStyle}>
    <Icon
      style={{ margin: '0em 0em 0em 0.25rem', cursor: 'pointer' }}
      name="setting"
      size="small"
    />
  </Label>
)

const InteractiveColumn = ({
  column,
  onRemoveItem,
  openModals,
  setModal,
  onSubmitProps,
  addCanvasComponent,
  changeComponentLayout,
  removeCanvasComponent,
  page
}) => {
  return (
    <>
      <span onClick={() => onRemoveItem(column.i)} style={iconStyle}>
        <Icon color="red" name="delete" size="small" />
      </span>
      <Popup trigger={<ComponentLabelContainer column={column} />}>
        {getName(column, false)}
      </Popup>
      <InteractiveColumnSettings
        i={column.i}
        page={page}
        removeCanvasComponent={removeCanvasComponent}
        changeComponentLayout={changeComponentLayout}
        addCanvasComponent={addCanvasComponent}
        onSubmitProps={onSubmitProps}
        modalOpen={!!openModals[column.i]}
        setModal={setModal}
        column={column}
        trigger={SettingsIcon}
        initial="column"
      />
    </>
  )
}

InteractiveColumn.propTypes = propTypes

export default InteractiveColumn
