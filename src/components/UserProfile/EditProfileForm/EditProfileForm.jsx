import React, { Component } from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Icon,
  Container
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired
}

const ProfileHeader = props => (
  <Grid.Row>
    <Grid.Column>
      <Header as='h1' textAlign='center' style={{ margin: '2rem 0' }}>
        {props.children}
      </Header>
    </Grid.Column>
  </Grid.Row>
)

ProfileHeader.propTypes = propTypes

class EditProfileForm extends Component {
  state = {
    name: ''
  }

  handleChange = (e, { name, value }) => {
    console.log({ name, value })
    this.setState({ [name]: value })
  }
  render () {
    return (
      <Grid>
        <ProfileHeader> Edit Profile </ProfileHeader>
        <Container style={{ marginBottom: '3rem' }}>
          <Grid.Row>
            <Grid.Column>
              <Form
                onSubmit={() => console.log('NEED TO IMPLEMENT THIS SHITT')}
              >
                <Form.Field required>
                  <label> Display Name </label>
                  <Form.Input
                    placeholder='Display Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Message error header='Error!!' content='Cannot be blank' />
                <Button color='black'>
                  <Icon name='checkmark' /> Update Profile
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Container>

      </Grid>
    )
  }
}

export default EditProfileForm
