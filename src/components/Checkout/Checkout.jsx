// import React, { Component } from 'react'

// import { Grid } from 'semantic-ui-react'
import { dependencies } from './default'
import createReactElement from '../../helpers/createReactElement'
import PropTypes from 'prop-types'
// import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
// import CheckoutHeader from './CheckoutHeader'
// import Stripe from './Stripe/Stripe'

// const marginTopStyle = {
//   marginTop: '1em'
// }
const propTypes = {
  page: PropTypes.object.isRequired
}

const Checkout = createReactElement(dependencies, propTypes)

// class Checkout extends Component {
//   render () {
//     return (
//       <Grid relaxed container style={marginTopStyle}>
//         <Grid.Row centered>
//           <CheckoutHeader />
//         </Grid.Row>
//         <Grid.Row>
//           <Grid.Column width={6}>
//             <Stripe />
//           </Grid.Column>
//           <Grid.Column width={6} floated="right">
//             <CheckoutSummary />
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     )
//   }
// }

export default Checkout
