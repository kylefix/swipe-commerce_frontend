import React, { Component } from 'react'
import { Icon, Label, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CartButton extends Component {
  state = {
    showCart: false,
    totalQuantity: 0,
    cart: []
  }

  handleToggleCart = () => {
    this.setState({ showCart: !this.state.showCart })
  }

  renderQuantity = cart =>
    cart.map(c => c.quantity).reduce((acc, curr) => acc + curr, 0)

  renderCartCounter = () => {
    const quantity = this.renderQuantity(this.props.cart)
    if (quantity === 0) return null
    return (
      <Label floating size="tiny" color="green" circular>
        {quantity}
      </Label>
    )
  }

  render () {
    return (
      <Link to="/cart">
        <Segment basic>
          <Icon
            name="shopping cart"
            size="large"
            onClick={this.handleToggleCart}
          />
          {this.renderCartCounter()}
        </Segment>
      </Link>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.products || []
})

export default connect(mapStateToProps)(CartButton)
