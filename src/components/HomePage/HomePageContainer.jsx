import { connect } from 'react-redux'
import HomePage from './HomePage'

const mapStateToProps = state => ({
  page: state.pages.pages['homepage']
})

export default connect(mapStateToProps)(HomePage)
