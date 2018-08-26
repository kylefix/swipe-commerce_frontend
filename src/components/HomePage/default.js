import React from 'react'

import { Grid } from 'semantic-ui-react'
import HomePageHeader from './HomePageHeader'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList/CategoryList'

export const element = {
  type: 'Grid',
  props: {
    verticalAlign: 'middle',
    centered: true,
    style: {
      margin: 0
    },
    children: [
      {
        type: 'Grid.Row',
        props: {
          style: {
            backgroundImage: `url("./test.jpg")`,
            backgroundSize: 'auto 100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 68px)'
          },
          children: [
            {
              type: 'Grid.Column',
              props: {
                style: {
                  textAlign: 'center'
                },
                width: 16,
                children: [
                  {
                    type: 'HomePageHeader'
                  },
                  {
                    type: 'SearchBar'
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
                width: '16',
                children: [
                  {
                    type: 'CategoryList'
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
  Grid: Grid,
  'Grid.Row': Grid.Row,
  'Grid.Column': Grid.Column,
  SearchBar,
  HomePageHeader,
  CategoryList
}

export const components = {
  SearchBar,
  HomePageHeader,
  CategoryList
}
