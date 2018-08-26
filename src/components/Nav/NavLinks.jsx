import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Menu, Container } from 'semantic-ui-react'

const renderLink = (active, to, name, key) => (
  <Menu.Item active={active} key={key}>
    {!active ? (
      <Link to={{ pathname: to, state: { name } }}> {name}</Link>
    ) : (
      <span>{name}</span>
    )}
  </Menu.Item>
)

const NavLinks = ({ categories, active }) => (
  <Container>
    {renderLink(active === 'Home', '/', 'Home')}
    {categories.map(category =>
      renderLink(
        active === `Category_${category._id}`,
        `/categories/${category._id}`,
        category.name,
        category._id
      )
    )}
  </Container>
)

const mapStateToProps = state => ({
  categories: state.categories.list,
  active: state.active
})

export default connect(mapStateToProps)(NavLinks)
