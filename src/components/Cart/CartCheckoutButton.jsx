import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

import ButtonProps from '../../propTypes/Button.info.json'

const CHECKOUT_BUTTON = 'Checkout'

export const defaultProps = {
  color: 'green',
  as: Link,
  to: '/checkout',
  fluid: true
}

const CheckoutButton = props => <Button {...props}>{CHECKOUT_BUTTON}</Button>

CheckoutButton.defaultProps = defaultProps
CheckoutButton.propList = ButtonProps

export default CheckoutButton
