import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from 'recharts'

const AreaC = ({ data, labelA, labelB, width, height }) => {
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={labelA}
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      {labelB && (
        <Area
          type="monotone"
          dataKey={labelB}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      )}
    </AreaChart>
  )
}
export default AreaC
