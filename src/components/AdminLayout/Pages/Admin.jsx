import React from 'react'

import { Grid } from 'semantic-ui-react'

import Canvas from './Canvas/CanvasContainer'

const marginTopStyle = { marginTop: '3em', borderRadius: '0.5em' }

const Admin = () => (
  <Grid style={marginTopStyle} container celled>
    <Grid.Column width={16}>
      <Canvas />
    </Grid.Column>
  </Grid>
)

export default Admin
