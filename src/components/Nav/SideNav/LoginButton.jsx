import React from 'react'
import { Button } from 'semantic-ui-react'
import { login } from '../../../feathers/authentication'

const LoginButton = () => (
  <Button primary size='large' onClick={login}>
    Login
  </Button>
)

export default LoginButton
