import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { createTransaction } from '../../../feathers/transactions'

import Loading from '../../.common/Loading'

import { Button, Form, Header, Segment, Icon } from 'semantic-ui-react'

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe
} from 'react-stripe-elements'
import StripeSuccessMessage from './StripeSuccessMessage'
import StripeErrorMessage from './StripeErrorMessage'

const style = {
  base: {
    fontSize: '16px',
    color: '#32325d',
    fontSmoothing: 'antialiased',
    '::placeholder': {
      color: '#ccc'
    }
  },
  invalid: {
    color: '#e5424d',
    ':focus': {
      color: '#303238'
    }
  }
}

class StripeForm extends Component {
  static propTypes = {
    stripe: PropTypes.object.isRequired
  }
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    success: false,
    error: '',
    loading: false
  }

  handleSubmit = async ev => {
    ev.preventDefault()
    try {
      this.setState({ loading: true })
      const token = await this.props.stripe.createToken({ name: 'Test' })
      if (!token.token) return console.log(`Error creating token! ${token}`)

      const response = await createTransaction(200, token.token)
      if (!response.paid) {
        return this.setState({ error: response, loading: false })
      }

      return this.setState({ success: true, loading: false }, () =>
        setTimeout(() => this.context.router.history.push('/myorders'), 3000)
      )
    } catch (e) {
      this.setState({ loading: false })
      console.log(`Error creating token! ${e}`)
    }
  }

  render () {
    if (this.state.success) return <StripeSuccessMessage />
    if (this.state.error) return <StripeErrorMessage />

    return (
      <Segment raised>
        {this.state.loading && <Loading />}
        <Header
          style={{ marginTop: '0.5em' }}
          size="small"
          dividing
          textAlign="center"
          icon
        >
          <Icon name="stripe" color="purple" />
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Header as="h4">Card number</Header>
            <CardNumberElement style={style} />
          </Form.Field>

          <Form.Field>
            <Header as="h4">Expiration date</Header>
            <CardExpiryElement />
          </Form.Field>

          <Form.Field>
            <Header as="h4">CVC</Header>
            <CardCVCElement />
          </Form.Field>

          <Form.Field>
            <Header as="h4">Postal code</Header>
            <PostalCodeElement />
          </Form.Field>

          <Button color="blue" fluid>
            Pay
          </Button>
        </Form>
      </Segment>
    )
  }
}

export default injectStripe(StripeForm)
