import React from 'react'
import Loading from '../.common/Loading'
import PropTypes from 'prop-types'

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

const ShowsLoading = ({ isLoading, children }) =>
  isLoading ? <Loading /> : children

ShowsLoading.propTypes = propTypes

export default ShowsLoading
