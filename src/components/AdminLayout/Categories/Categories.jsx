import React, { Component } from 'react'
import { Grid, Header, Table } from 'semantic-ui-react'

import Loading from '../../.common/Loading'

import CategoryItem from './CategoryItem'

import { filterProductBy } from '../../../feathers/products'

import CategoryForm from './CategoryForm'
import {
  createCategory,
  deleteCategory,
  getCategories
} from '../../../feathers/categories'

class Categories extends Component {
  state = {
    value: '',
    loading: true,
    categories: []
  }

  async componentDidMount () {
    const categories = (await getCategories()).data
    const withProductCount = await Promise.all(
      categories.map(async category => {
        const products = await filterProductBy({ categoryId: category._id })
        return {
          ...category,
          productCount: products.total
        }
      })
    )

    this.setState({ categories: withProductCount, loading: false })
  }

  handleChange = e => this.setState({ value: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    const doAsync = async name => {
      this.setState({ value: '', loading: true })
      const result = await createCategory(name)
      if (result.name !== name) {
        return console.log('Error creating category')
      }

      this.setState({
        loading: false,
        categories: this.state.categories.concat(result)
      })
    }
    doAsync(this.state.value)
  }

  handleDelete = id => {
    const doAsync = async id => {
      this.setState({ value: '', loading: true })
      const result = await deleteCategory(id)
      if (result._id !== id) {
        return console.log('Error removing category')
      }
      this.setState({
        loading: false,
        categories: this.state.categories.filter(
          category => category._id !== id
        )
      })
    }
    doAsync(id)
  }

  render () {
    if (this.state.loading) return <Loading />
    return (
      <Grid container style={{ margin: '2rem 0' }}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h1" style={{ marginBottom: '3rem' }}>
              Create a new category
            </Header>
            <CategoryForm
              value={this.state.value}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Table collapsing definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell collapsing>Product Count</Table.HeaderCell>
                  <Table.HeaderCell collapsing>
                    Remove Category
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.categories.map(category => (
                  <CategoryItem
                    key={category.name}
                    category={category}
                    onRemove={this.handleDelete}
                  />
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Categories
