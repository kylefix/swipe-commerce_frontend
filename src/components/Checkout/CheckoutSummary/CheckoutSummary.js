import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Table, Header, Segment } from 'semantic-ui-react'

import TableProps from '../../../propTypes/Table.info.json'

import { getTotalandTaxes } from '../../../helpers/getCartTotals'

import CheckoutBackButton from './CheckoutBackButton'
import CheckoutSummaryHeader from './CheckoutSummaryHeader'

const propTypes = {
  cart: PropTypes.object.isRequired
}

const OrderSummary = props => {
  if (!props.cart.length) return <Header as="h2">Your cart is empty</Header>

  const { total, tax } = getTotalandTaxes(props.cart)

  return (
    <Segment raised clearing>
      <CheckoutSummaryHeader />
      <Table padded size="large" striped color="blue">
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">Sub-Total</Header>
            </Table.Cell>
            <Table.Cell collapsing>${total}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">Taxes</Header>
            </Table.Cell>
            <Table.Cell collapsing>${tax}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell positive>
              <Header>Grand-Total</Header>
            </Table.Cell>
            <Table.Cell collapsing positive>
              ${tax + total}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <CheckoutBackButton />
    </Segment>
  )
}

OrderSummary.propList = {
  ...TableProps
}

const mapStateToProps = state => ({
  cart: state.cart.products
})

OrderSummary.propTypes = propTypes

export default connect(mapStateToProps)(OrderSummary)
