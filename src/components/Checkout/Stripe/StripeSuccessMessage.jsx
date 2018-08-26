import React from 'react'
import { Message } from 'semantic-ui-react'

const STRIPE_SUCCESS_HEADER = 'We are Gucci!'
const STRIPE_SUCCESS_REDIRECT = 'You will now be redirected...'

const StripeSuccessMessage = () => (
  <Message positive>
    <Message.Header content={STRIPE_SUCCESS_HEADER} />
    <p>{STRIPE_SUCCESS_REDIRECT}</p>
  </Message>
)

export default StripeSuccessMessage
