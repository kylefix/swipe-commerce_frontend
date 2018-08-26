import React from 'react'
import PropTypes from 'prop-types'

import { Card, Statistic } from 'semantic-ui-react'
import CountUp from 'react-countup'

const StatCard = ({ label, stat }) => (
  <Card color="blue">
    <Card.Content textAlign="center">
      <Statistic color="green">
        <Statistic.Label>{label}</Statistic.Label>
        <Statistic.Value>
          <CountUp end={stat || 0} />
        </Statistic.Value>
      </Statistic>
    </Card.Content>
  </Card>
)

export default StatCard
