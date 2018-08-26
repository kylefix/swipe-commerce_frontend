import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const BACK_TO_CART_BUTTON = 'Back To Cart'

const CheckoutBackButton = () => (
  <Button floated="right" as={Link} to="/cart" textAlign="right" color="vk">
    {BACK_TO_CART_BUTTON}
  </Button>
)

export default CheckoutBackButton
