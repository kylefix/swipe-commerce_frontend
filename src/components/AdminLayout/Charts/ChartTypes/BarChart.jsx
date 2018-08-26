import React from 'react'

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

const BarC = ({ data, labelA, labelB, width, height }) => (
  <BarChart
    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    width={width}
    height={height}
    data={data}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={labelA} fill="#8884d8" />
    {labelB && <Bar dataKey={labelB} fill="#82ca9d" />}
  </BarChart>
)

export default BarC
