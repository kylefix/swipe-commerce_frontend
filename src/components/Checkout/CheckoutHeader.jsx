import React from 'react'
import PropTypes from 'prop-types'
import { Header, Message } from 'semantic-ui-react'
import HeaderProps from '../../propTypes/Header.info.json'

const propTypes = {
  checkoutHeader: PropTypes.string.isRequired,
  checkoutSubheader: PropTypes.string.isRequired
}

const defaultProps = {
  checkoutHeader: 'Checkout',
  checkoutSubheader:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
}

const CheckoutHeader = ({ checkoutHeader, checkoutSubheader }) => (
  <>
    <Header as="h1" textAlign="center">
      {checkoutHeader}
      <Header.Subheader>
        <Message info>{checkoutSubheader}</Message>
      </Header.Subheader>
    </Header>
  </>
)

CheckoutHeader.propList = {
  ...HeaderProps,
  props: HeaderProps.props.concat(
    {
      name: 'checkoutHeader',
      type: 'string',
      description: 'The text to displayed in the checkout header'
    },
    {
      name: 'checkoutSubheader',
      type: 'string',
      description: 'The text to displayed in the checkout subheader'
    }
  )
}

CheckoutHeader.propTypes = propTypes
CheckoutHeader.defaultProps = defaultProps

export default CheckoutHeader
