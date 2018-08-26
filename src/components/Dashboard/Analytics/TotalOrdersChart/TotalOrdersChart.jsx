import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { Divider } from 'semantic-ui-react'

import DashboardContainer from '../DashboardContainer'
import AnalyticsHeader from '../AnalyticsHeader'

const TotalOrdersChart = ({ orders }) => (
  <DashboardContainer>
    <AnalyticsHeader>Orders (Monthly)</AnalyticsHeader>
    <Divider />
    <AreaChart
      width={800}
      height={300}
      data={orders}
      margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="orders" stroke="#f0932b" fill="#ffbe76" />
    </AreaChart>
    <Divider />
  </DashboardContainer>
)

export default TotalOrdersChart
