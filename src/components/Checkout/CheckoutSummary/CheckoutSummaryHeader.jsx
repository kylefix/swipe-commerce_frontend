import React from 'react'
import { Header, Label } from 'semantic-ui-react'

const CHECKOUT_SUMMARY_HEADER = 'Order Summary'
const CHECOUT_SUMMARY_SUBHEADER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

const CheckoutSummaryHeader = () => (
  <>
    <Label ribbon color="green">
      Secure Checkout
    </Label>
    <Header style={{ marginTop: '0' }} as="h2" textAlign="center">
      {CHECKOUT_SUMMARY_HEADER}
      <Header.Subheader content={CHECOUT_SUMMARY_SUBHEADER} />
    </Header>
  </>
)

export default CheckoutSummaryHeader
