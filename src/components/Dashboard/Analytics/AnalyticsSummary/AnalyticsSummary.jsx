import React from 'react'
import { Card, Statistic } from 'semantic-ui-react'

const AnalyticsSummary = ({ totalSales, totalOrders }) => (
  <Card.Group
    style={{ justifyContent: 'space-around', marginBottom: '2em' }}
    centered
  >
    <Card color="blue">
      <Card.Content textAlign="center">
        <Statistic color="green">
          <Statistic.Label> Total Sales </Statistic.Label>
          <Statistic.Value>${totalSales}</Statistic.Value>
        </Statistic>
      </Card.Content>
    </Card>
    <Card color="blue">
      <Card.Content textAlign="center">
        <Statistic color="red">
          <Statistic.Label>Total Orders </Statistic.Label>
          <Statistic.Value>{totalOrders}</Statistic.Value>
        </Statistic>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default AnalyticsSummary
// {/* <Card fluid color='blue' style={{ padding: '3rem' }}>
//   <Header as='h2' style={headerStyle}>
//     Total Orders
//   </Header>
//   <Divider />
//   <Header as='p' style={{ fontSize: '4rem', fontWeight: '100' }}>
//     {totalOrders} <span style={{ fontSize: '2rem' }}>orders</span>
//   </Header> */}
