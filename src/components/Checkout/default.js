import React from 'react'

import { Grid } from 'semantic-ui-react'
import CheckoutHeader from './CheckoutHeader'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import Stripe from './Stripe/Stripe'

export const element = {
  type: 'Grid',
  props: {
    container: true,
    relaxed: true,
    style: {
      margin: '2em'
    },
    children: [
      {
        type: 'Grid.Row',
        props: {
          centered: true,
          children: [
            {
              type: 'Grid.Column',
              props: {
                width: 16,
                children: [{ type: 'CheckoutHeader', props: { children: [] } }]
              }
            }
          ]
        }
      },
      {
        type: 'Grid.Row',
        props: {
          children: [
            {
              type: 'Grid.Column',
              props: {
                width: 6,
                children: [
                  {
                    type: 'Stripe',
                    props: { children: [] }
                  }
                ]
              }
            },
            {
              type: 'Grid.Column',
              props: {
                width: 6,
                floated: 'right',
                children: [
                  {
                    type: 'CheckoutSummary',
                    props: {
                      children: []
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}

export const dependencies = {
  '': React.Fragment,
  Grid,
  'Grid.Row': Grid.Row,
  'Grid.Column': Grid.Column,
  CheckoutSummary,
  CheckoutHeader,
  Stripe
}

export const components = {
  CheckoutSummary,
  CheckoutHeader,
  Stripe
}
