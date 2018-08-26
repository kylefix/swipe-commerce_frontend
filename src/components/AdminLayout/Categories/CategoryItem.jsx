import React from 'react'
import PropTypes from 'prop-types'

import { Icon, Table } from 'semantic-ui-react'

const CategoryItem = ({ category, onRemove }) => (
  <Table.Row>
    <Table.Cell collapsing>{category.name}</Table.Cell>
    <Table.Cell style={{ textAlign: 'center' }} collapsing>
      {category.productCount}
    </Table.Cell>
    <Table.Cell
      style={{ textAlign: 'center' }}
      collapsing
      onClick={() => {
        onRemove(category._id)
      }}
    >
      <Icon name="delete" color="red" />
    </Table.Cell>
  </Table.Row>
)

export default CategoryItem
