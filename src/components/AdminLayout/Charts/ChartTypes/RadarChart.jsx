import React from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts'
import PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.array.isRequired,
  labelA: PropTypes.string.isRequired,
  labelB: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired
}

const RadarC = ({ data, labelA, labelB, dataKey, width, height }) => (
  <RadarChart
    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    width={width}
    height={height}
    outerRadius={120}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey={dataKey} />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
    <Radar
      name={labelA}
      dataKey={labelA}
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
    />
    {labelB &
      (
        <Radar
          name={labelB}
          dataKey={labelB}
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      )}
    <Legend />
  </RadarChart>
)

RadarC.propTypes = propTypes

export default RadarC
