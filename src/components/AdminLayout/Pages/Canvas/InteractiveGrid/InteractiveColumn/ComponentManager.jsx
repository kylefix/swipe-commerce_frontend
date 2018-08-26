import React from 'react'
import PropTypes from 'prop-types'

import InteractiveGridLayout from '../InteractiveGridLayout'

import { Label, Icon } from 'semantic-ui-react'

export default class ComponentManager extends React.Component {
  state = {
    isGridActive: true
  }

  static propTypes = {
    onLayoutChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    i: PropTypes.string.isRequired,
    layout: PropTypes.array.isRequired
  }

  handleLayoutChange = layout => {
    if (JSON.stringify(layout) === JSON.stringify(this.props.layout)) return
    const newItems = layout.sort((a, b) => a.y - b.y).map(item => {
      const target = this.props.layout.find(x => x.i === item.i)
      return {
        type: target.type,
        props: target.props
      }
    })

    this.props.onLayoutChange(newItems, this.props.i)
  }

  render () {
    const { isGridActive } = this.state
    return (
      <InteractiveGridLayout
        isDraggable={isGridActive}
        isResizable={false}
        onLayoutChange={this.handleLayoutChange}
        cols={1}
        rowHeight={30}
        layout={this.props.layout}
      >
        {this.props.layout.map(component => (
          <div key={component.i}>
            <Label color="green" size="large" style={{ cursor: 'pointer' }}>
              {component.type}
              <Icon
                name="delete"
                onClick={() => {
                  this.props.onRemove(component.i, this.props.i)
                }}
              />
            </Label>
          </div>
        ))}
      </InteractiveGridLayout>
    )
  }
}
