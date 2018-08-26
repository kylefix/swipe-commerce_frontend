import React from 'react'

import brace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/sass'
import 'brace/theme/solarized_dark'
import 'brace/ext/language_tools'

export default class CssEditor extends React.Component {
  state = {
    isOpen: false
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  onChange = (value, t) => {
    this.props.onChange(value)
  }

  render () {
    return (
      <AceEditor
        mode="sass"
        focus
        theme="solarized_dark"
        fontSize={18}
        value={this.props.value || ''}
        onChange={this.onChange}
        height="250px"
        width="450px"
        name="CssEditor"
      />
    )
  }
}
