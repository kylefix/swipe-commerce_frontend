import React from 'react'
import { connect } from 'react-redux'
import { Header, Image } from 'semantic-ui-react'

const SidebarHeader = ({ displayName }) => (
  <div style={{ paddingBottom: '2rem' }}>
    <Header
      as='h1'
      style={{ textAlign: 'center', marginTop: '1rem', color: 'white' }}
    >
      {displayName}
    </Header>
    <Image
      src='http://www.alansonsample.com/images/AlansonSample_Headshot.JPG'
      size='small'
      circular
      centered
    />
  </div>
)

const mapStateToProps = state => ({
  displayName: state.user.displayName
})

export default connect(mapStateToProps)(SidebarHeader)
