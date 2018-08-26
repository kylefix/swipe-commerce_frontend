import React from 'react'
import { Image, Grid, Header, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const CategoryListItem = props => (
  <Grid.Row>
    <Grid.Column width={8}>
      <Header as="h2" style={{ fontSize: '3em' }}>
        {props.categoryName}
      </Header>
      <Grid.Row style={{ fontSize: '1.2em', color: '#555' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Grid.Row>
      <Grid.Row style={{ marginTop: '1em' }}>
        <Grid.Column textAlign="center">
          <Button rounded primary size="huge">
            {props.categoryName}
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
    <Grid.Column floated="right" width={6}>
      <Image rounded size="large" src={props.imageUrl} />
    </Grid.Column>
  </Grid.Row>
)

CategoryListItem.propTypes = {
  imageUrl: PropTypes.string,
  categoryName: PropTypes.string
}

export default CategoryListItem
