import React, { Component } from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Icon,
  Container,
  Dimmer,
  Loader,
  Progress
} from 'semantic-ui-react'

import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired
}

const HeaderComponent = props => (
  <Grid.Row>
    <Grid.Column>
      <Header as='h1' textAlign='center' style={{ margin: '2rem 0' }}>
        {props.children}
      </Header>
    </Grid.Column>
  </Grid.Row>
)

HeaderComponent.propTypes = propTypes

export default HeaderComponent
