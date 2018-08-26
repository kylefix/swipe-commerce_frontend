import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SellerButton = () => (
  <Link to='/dashboard'>
    <Button primary size='medium'>
      Seller Dashboard
    </Button>
  </Link>
)

export default SellerButton
