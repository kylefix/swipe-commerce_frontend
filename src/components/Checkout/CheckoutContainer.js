import { connect } from 'react-redux'

import Checkout from './Checkout'

const mapStateToProps = state => ({
  page: state.pages.pages['checkout']
})

export default connect(mapStateToProps)(Checkout)
