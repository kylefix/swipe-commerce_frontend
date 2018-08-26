import React from 'react'
import ChartChooser from './ChartChooser'

export default class ChartContainer extends React.Component {
  render () {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {this.props.height &&
          this.props.width &&
          ChartChooser({
            ...this.props.options,
            width: this.props.width * 70 - this.props.width * 5,
            height: this.props.height * 30 - 20
          })}
      </div>
    )
  }
}
