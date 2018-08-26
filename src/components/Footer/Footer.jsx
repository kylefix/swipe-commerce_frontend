import React from 'react'
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Our Policy</List.Item>
              <List.Item as="a">FAQ</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Online Sales</List.Item>
              <List.Item as="a">Vendor Support</List.Item>
              <List.Item as="a">Sales and Analytics</List.Item>
              <List.Item as="a">Alibay Affiliation Program</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Contact
            </Header>
            <p>Alibay Inc, 1425 Jacques Street, Montreal, QC</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
