import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.array.isRequired,
  labelA: PropTypes.string.isRequired
}

const PieC = ({ data, labelA, width, height }) => (
  <PieChart
    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    width={width}
    height={height}
  >
    <Pie
      isAnimationActive={false}
      data={data}
      cx={200}
      cy={200}
      outerRadius={80}
      dataKey={labelA}
      fill="#8884d8"
      label
    />
    <Tooltip />
  </PieChart>
)

PieC.propTypes = propTypes

export default PieC
