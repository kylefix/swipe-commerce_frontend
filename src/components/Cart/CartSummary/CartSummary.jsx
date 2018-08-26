import React from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { getTotalandTaxes } from '../../../helpers/getCartTotals'
import TableProps from '../../../propTypes/Table.info.json'

const SUBTOTAL_HEADER = 'Sub-Total:'
const TAXES_HEADER = 'Taxes:'
const TOTAL_HEADER = 'Total:'

const propTypes = {
  cart: PropTypes.array.isRequired
}

const defaultProps = {
  basic: 'very'
}

const CartSummary = ({ cart, ...props }) => {
  const { total, tax } = getTotalandTaxes(cart)
  return (
    <Table {...props}>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{SUBTOTAL_HEADER}</Table.Cell>
          <Table.Cell>{total.toFixed(2)}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>{TAXES_HEADER}</Table.Cell>
          <Table.Cell>{tax.toFixed(2)}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>{TOTAL_HEADER}</Table.Cell>
          <Table.Cell>{(total + tax).toFixed(2)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

CartSummary.propTypes = propTypes
CartSummary.propList = {
  ...TableProps,
  props: TableProps.props.concat({
    name: 'cart',
    type: 'array',
    description: 'A reference to an internal object containing the cart data.'
  })
}
CartSummary.defaultProps = defaultProps

export default CartSummary
