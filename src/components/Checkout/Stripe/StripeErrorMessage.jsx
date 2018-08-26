import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

const STRIPE_ERROR_HEADER = 'Oh oh!'

const propTypes = {
  message: PropTypes.string.isRequired
}

const StripeErrorMessage = ({ message }) => (
  <Message positive>
    <Message.Header content={STRIPE_ERROR_HEADER} />
    <p>{message}</p>
  </Message>
)

StripeErrorMessage.propTypes = propTypes

export default StripeErrorMessage
