import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import HeaderProps from '../../propTypes/Header.info.json'

const propTypes = {
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string
}

const defaultProps = {
  style: { fontSize: '6em', paddingBottom: '0.25em' },
  headerText: 'Your Own Marketplace',
  subHeaderText: 'Fully customizable.Create your own in minutes.'
}

const HomePageHeader = ({ style, headerText, subHeaderText }) => (
  <Header inverted style={style}>
    {headerText}
    <Header.Subheader inverted style={{ fontSize: '0.4em' }}>
      {subHeaderText}
    </Header.Subheader>
  </Header>
)

HomePageHeader.propTypes = propTypes
HomePageHeader.defaultProps = defaultProps
HomePageHeader.propList = {
  ...HeaderProps,
  props: HeaderProps.props.concat(
    {
      name: 'headerText',
      type: 'string',
      description: 'The text to displayed in the HomePage header'
    },
    {
      name: 'subHeaderText',
      type: 'string',
      description: 'The text to displayed in the HomePage subheader'
    }
  )
}

export default HomePageHeader
