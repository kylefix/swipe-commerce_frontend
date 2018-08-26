import React from 'react'
import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const propTypes = {
  data: PropTypes.array.isRequired,
  labelA: PropTypes.string.isRequired,
  labelB: PropTypes.string.isRequired
}

const LineC = ({ data, labelA, labelB, width, height }) => (
  <LineChart
    width={width}
    height={height}
    data={data}
    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey={labelA}
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
    {labelB & <Line type="monotone" dataKey={labelB} stroke="#82ca9d" />}
  </LineChart>
)

LineC.propTypes = propTypes

export default LineC
