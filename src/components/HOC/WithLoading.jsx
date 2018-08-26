import React from 'react'
import { connect } from 'react-redux'

const WithLoading = context => ToWrap => {
  const mapStateToProps = state => ({
    loading: state[context].loading
  })
  const Comp = props => <ToWrap {...props} />

  return connect(mapStateToProps)(Comp)
}

export default WithLoading
