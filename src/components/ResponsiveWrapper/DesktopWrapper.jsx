import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import PropTypes from 'prop-types'

import { Responsive } from 'semantic-ui-react'

export default class DesktopContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    mobile: PropTypes.bool
  }

  render () {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Nav />
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, { mobile: false })
        )}
      </Responsive>
    )
  }
}
