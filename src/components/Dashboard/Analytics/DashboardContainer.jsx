import React from 'react'
import { Container } from 'semantic-ui-react'

const DashboardContainer = props => (
  <Container style={{ margin: '2rem 0' }}>{props.children}</Container>
)

export default DashboardContainer
