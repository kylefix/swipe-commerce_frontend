import React from 'react'

import LineC from './ChartTypes/LineChart'
import AreaChart from './ChartTypes/AreaChart'
import BarChart from './ChartTypes/BarChart'
import RadarChart from './ChartTypes/RadarChart'
import PieChart from './ChartTypes/PieChart'

const ChartChooser = ({ type, dataKey, ...props }) => {
  switch (type) {
    case 'line':
      return <LineC {...props} />
    case 'area':
      return <AreaChart {...props} />
    case 'bar':
      return <BarChart {...props} />
    case 'radar':
      return <RadarChart dataKey={dataKey} {...props} />
    case 'pie':
      return <PieChart {...props} />
    default:
      return <div> Nothing here </div>
  }
}

export default ChartChooser
