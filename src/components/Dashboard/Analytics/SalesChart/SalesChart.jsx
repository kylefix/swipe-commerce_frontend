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

import DashboardContainer from '../DashboardContainer'
import AnalyticsHeader from '../AnalyticsHeader'

const SalesChart = ({ sales }) => (
  <DashboardContainer>
    <AnalyticsHeader>Sales (Monthly)</AnalyticsHeader>

    <AreaChart
      data={sales}
      width={800}
      height={300}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </DashboardContainer>
)

export default SalesChart
