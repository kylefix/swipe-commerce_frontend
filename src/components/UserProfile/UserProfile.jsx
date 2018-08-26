import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import EditProfileForm from './EditProfileForm/EditProfileForm'
import AddressForm from './AddressForm/AddressForm'

class UserProfile extends Component {
  render () {
    return (
      <Grid divided='vertically'>
        <Grid.Row>
          <Grid.Column stretched width={16}>
            <EditProfileForm />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column stretched width={16}>
            <AddressForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UserProfile
