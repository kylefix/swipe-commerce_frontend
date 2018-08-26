import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'

import app from '../../feathers'
import { login } from '../../feathers/authentication'

import Loading from '../.common/Loading'

const propTypes = {
  component: PropTypes.func,
  render: PropTypes.func
}

const UserRoute = ({ render, ...props }) => (
  <Route
    {...props}
    render={props => (app.get('user') ? render(props) : login() && <Loading />)}
  />
)

UserRoute.propTypes = propTypes

export default UserRoute
