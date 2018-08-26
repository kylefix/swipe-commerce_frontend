import PropTypes from 'prop-types'
import { dependencies } from './default.js'
import createReactElement from '../../helpers/createReactElement'

const propTypes = {
  page: PropTypes.object.isRequired
}

const HomePage = createReactElement(dependencies, propTypes)

export default HomePage
