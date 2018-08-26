import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Container, Divider } from 'semantic-ui-react'

import AnalyticsSummary from './AnalyticsSummary/AnalyticsSummary'
import SalesChart from './SalesChart/SalesChart'
import TotalOrdersChart from './TotalOrdersChart/TotalOrdersChart'
import Loading from '../../.common/Loading'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Oct',
  'Nov',
  'Dec'
]

const getMonth = date => date.split('-')[1].slice(0, 2)

const sumOfSales = order =>
  order.orderDetails.reduce(
    (acc, sale) => ({
      sales: acc.sales + sale.price,
      orders: acc.orders + 1
    }),
    { sales: 0, orders: 0 }
  )

const parseSales = orders =>
  orders.reduce(
    (acc, order) => {
      const month = getMonth(order.orderDetails[0].updatedAt) - 1
      const { sales, orders } = sumOfSales(order)
      acc.sales[month] = (acc.sales[month] || 0) + sales
      acc.orders[month] = (acc.orders[month] || 0) + orders
      return acc
    },
    { sales: [], orders: [] }
  )

const toMonths = (arr, type) =>
  MONTHS.map((value, index) => ({
    name: MONTHS[index],
    [type]: arr[index] || 0
  }))

const getTotalSalesAndOrders = (sales, orders) => {
  const totalSales = sales
    .map(sale => sale.sales)
    .reduce((acc, curr) => acc + curr, 0)

  const totalOrders = orders
    .map(o => o.orders)
    .reduce((acc, curr) => acc + curr, 0)

  return { totalSales, totalOrders }
}

class Analytics extends Component {
  render () {
    if (this.props.loading) return <Loading />
    const { orders: orderDetails } = this.props
    const { orders, sales } = parseSales(orderDetails)
    const parsedOrders = toMonths(orders, 'orders')
    const parsedSales = toMonths(sales, 'sales')
    const { totalOrders, totalSales } = getTotalSalesAndOrders(
      parsedSales,
      parsedOrders
    )

    return (
      <Container
        style={{
          margin: '2rem',
          padding: '0 2rem'
        }}
      >
        <Header as="h1" style={{ marginBottom: '3rem' }}>
          Analytics{' '}
        </Header>
        <AnalyticsSummary totalOrders={totalOrders} totalSales={totalSales} />
        <Divider />
        <SalesChart sales={parsedSales} />
        <Divider />
        <TotalOrdersChart orders={parsedOrders} />
      </Container>
    )
  }
}

const mapStateToProps = ({ seller }) => ({
  loading: seller.loading,
  orders: seller.orders
})

export default connect(mapStateToProps)(Analytics)
