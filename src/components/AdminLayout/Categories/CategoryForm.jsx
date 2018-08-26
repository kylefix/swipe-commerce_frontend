import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const CategoryForm = ({ handleChange, value, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label> Category Name</label>
      <input placeholder='First Name' value={value} onChange={handleChange} />
    </Form.Field>

    <Button type='submit' primary> Create a new category</Button>
  </Form>
)

export default CategoryForm
