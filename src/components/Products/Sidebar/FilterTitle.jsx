import React from 'react'
import { Header } from 'semantic-ui-react'

import PropTypes from 'prop-types'

const FilterTitle = props => (
  <Header as='h4' style={{ marginTop: '2rem' }}>
    {props.children}
  </Header>
)

const filterTitleProptypes = {
  children: PropTypes.string.isRequired
}

FilterTitle.propTypes = filterTitleProptypes

export default FilterTitle
