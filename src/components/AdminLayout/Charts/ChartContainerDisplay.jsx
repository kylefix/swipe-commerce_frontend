import React from 'react'
import { Grid } from 'semantic-ui-react'

const ResuableGridContainer = ({ children, rowProps, ...props }) => (
  <Grid.Row {...rowProps}>
    <Grid.Column {...props}>{children}</Grid.Column>
  </Grid.Row>
)

export default ResuableGridContainer
