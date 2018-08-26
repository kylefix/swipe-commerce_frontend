import React from 'react'
import { Header } from 'semantic-ui-react'

import HeaderProps from '../../propTypes/Header.info.json'

const CART_HEADER = 'Cart'

export const defaultProps = {
  as: 'h1',
  style: { textAlign: 'center', margin: '3rem 0' }
}

const CartHeader = props => <Header {...props}>{CART_HEADER}</Header>

CartHeader.defaultProps = defaultProps
CartHeader.propList = HeaderProps

export default CartHeader
