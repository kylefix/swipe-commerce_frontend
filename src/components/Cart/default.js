import React from 'react'

import { Grid, Header } from 'semantic-ui-react'

import ShowsLoading from '../HOC/ShowsLoading'
import CartHeader from './CartHeader'
import CartTable from './CartTable/CartTable'
import CartCheckoutButton from './CartCheckoutButton'
import { Link } from 'react-router-dom'
import CartSummary from './CartSummary/CartSummary'

// const getPath = comp => import(`./CartSummary/${comp}`)

// const CartSummary = Loadable({
//   loader: () => getPath('CartSummary'),
//   loading: Loading // eslint-disable-line react/display-name
// })

export const element = {
  type: 'Grid',
  props: {
    container: true,
    style: {
      margin: '2em'
    },
    children: [
      {
        type: 'Grid.Row',
        props: {
          children: [
            {
              type: 'Grid.Column',
              props: {
                width: 16,
                children: [
                  {
                    type: 'CartHeader'
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: '$if',
        predicate: {
          $or: [{ $not: '#cart' }, { $not: '#cart.length' }]
        },
        props: {
          children: [
            {
              type: '',
              props: {
                children: [
                  {
                    type: 'Grid.Row',
                    props: {
                      centered: true,
                      children: [
                        {
                          type: 'Grid.Column',
                          props: {
                            width: 12,
                            children: [
                              {
                                type: 'CartTable',
                                props: {
                                  cart: '#cart'
                                }
                              }
                            ]
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
                            floated: 'right',
                            width: 4,
                            children: [
                              {
                                type: 'CartSummary',
                                props: {
                                  cart: '#cart'
                                }
                              },
                              {
                                type: 'CartCheckoutButton',
                                props: {
                                  as: '@Link'
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
            },
            {
              type: 'Header',
              props: {
                as: 'h1',
                textAlign: 'center',
                style: {
                  margin: '3em'
                }
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
  Grid: Grid,
  'Grid.Row': Grid.Row,
  'Grid.Column': Grid.Column,
  CartHeader: CartHeader,
  CartTable: CartTable,
  CartSummary: CartSummary,
  CartCheckoutButton: CartCheckoutButton,
  Header: Header,
  Link: Link
}

export const components = {
  CartCheckoutButton: CartCheckoutButton,
  CartSummary: CartSummary,
  CartTable: CartTable,
  CartHeader: CartHeader
}
