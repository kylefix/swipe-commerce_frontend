import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

import ButtonProps from '../../propTypes/Button.info.json'

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const defaultProps = {
  color: 'blue'
}

const ReviewButton = props => <Button {...props}>Write a Review</Button>

ReviewButton.propTypes = propTypes
ReviewButton.defaultProps = defaultProps
ReviewButton.propList = {
  ...ButtonProps
}

export default ReviewButton
