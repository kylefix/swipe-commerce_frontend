import React from 'react'
import { Dimmer, Loader, Container } from 'semantic-ui-react'

export default () => (
  <Container style={{ height: '100vh' }}>
    <Dimmer page active>
      <Loader active size="huge" />
    </Dimmer>
  </Container>
)
