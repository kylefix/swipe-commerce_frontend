import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavLinks from '../Nav/NavLinks'
import Nav from '../Nav/Nav'

import { Responsive, Sidebar, Menu } from 'semantic-ui-react'

export default class MobileContainer extends Component {
  state = {
    opened: false
  }

  static propTypes = {
    children: PropTypes.node,
    mobile: PropTypes.bool
  }

  handleClick = () => this.state.opened && this.setState({ opened: false })

  handleToggle = () =>
    this.setState({
      opened: !this.state.opened
    })

  render() {
    const { opened } = this.state
    const { children } = this.props

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={opened}
          >
            <NavLinks />
          </Sidebar>
          <Sidebar.Pusher
            dimmed={opened}
            onClick={this.handleClick}
            style={{ minHeight: '100vh' }}
          >
            <Nav mobile onClick={this.handleToggle} />
            {React.Children.map(children, child =>
              React.cloneElement(child, { mobile: true })
            )}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}
