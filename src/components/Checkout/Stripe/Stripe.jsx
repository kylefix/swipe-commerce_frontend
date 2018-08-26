import React from 'react'
import PropTypes from 'prop-types'

import { StripeProvider, Elements } from 'react-stripe-elements'
import StripeForm from './StripeForm'

const API_KEY = 'pk_test_DmXXXjvCz78RotcdwSop8nSW'

const propTypes = {
  apiKey: PropTypes.string
}

const defaultProps = {
  apiKey: API_KEY
}

const Stripe = ({ apiKey }) => (
  <StripeProvider apiKey={apiKey}>
    <Elements>
      <StripeForm />
    </Elements>
  </StripeProvider>
)

Stripe.defaultProps = defaultProps
Stripe.propTypes = propTypes
Stripe.propList = {
  props: [
    {
      name: 'apiKey',
      type: 'string',
      description: 'Your Stripe API key'
    }
  ]
}

export default Stripe
