import React from 'react'
import { Header } from 'semantic-ui-react'

const AnalyticsHeader = props => (
  <Header
    as='h2'
    style={{
      textAlign: 'center',
      margin: '2rem 0',
      color: 'grey',
      fontSize: '2rem',
      fontWeight: '100'
    }}
  >
    {props.children}
  </Header>
)

export default AnalyticsHeader
