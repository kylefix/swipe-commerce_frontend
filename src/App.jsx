import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import UserRoute from './components/HOC/UserRoute'
import Loading from './components/.common/Loading'
import ResponsiveWrapper from './components/ResponsiveWrapper/ResponsiveWrapper'
import Footer from './components/Footer/Footer'

import HomePageContainer from './components/HomePage/HomePageContainer'
import Products from './components/Products/Products'
import ProductDetailContainer from './components/ProductDetail/ProductDetailContainer'
import CartContainer from './components/Cart/CartContainer'
import CheckoutContainer from './components/Checkout/CheckoutContainer'
import Dashboard from './components/Dashboard/Dashboard'
import UserProfile from './components/UserProfile/UserProfile'
import UserOrders from './components/UserOrders/UserOrders'
import Admin from './components/AdminLayout/Pages/Admin'

import AdminLayout from './components/AdminLayout/AdminLayout'

import {
  searchProducts,
  getCategoryProducts,
  getProduct
} from './reducers/products'
import { authenticate } from './reducers/user'
import { getCart } from './reducers/cart'
import { fetchCategories } from './reducers/categories'
import { setActive } from './reducers/active'

const successRedirectRoute = () => {
  const path = window.localStorage.getItem('redirect')
  window.localStorage.removeItem('redirect')

  return <Redirect exact from="/successRedirect" to={path || '/'} />
}

const Routes = props => (
  <ResponsiveWrapper>
    <>
      {window.localStorage.getItem('redirect') && successRedirectRoute()}
      <Route
        exact
        path="/"
        render={() => {
          props.setActive('Home')
          return <HomePageContainer />
        }}
      />
      <Route
        exact
        path="/search/:term"
        render={({ match }) => {
          props.setActive('Search')
          props.searchProducts(match.params.term)
          return <Products />
        }}
      />
      <Route
        exact
        path="/categories/:id"
        render={({ match }) => {
          const { id } = match.params
          const cat = props.categories.find(category => category._id === id)
          props.setActive(`Category_${id}`)
          props.getCategoryProducts(id)
          return <Products active={cat && cat.name} />
        }}
      />
      <Route
        exact
        path="/product/:id"
        render={({ match }) => {
          props.setActive('Product')
          props.getProduct(match.params.id)
          return <ProductDetailContainer />
        }}
      />
      <UserRoute
        exact
        path="/cart"
        render={({ match }) => {
          props.setActive('Cart')
          props.getCart()
          return <CartContainer />
        }}
      />
      <UserRoute exact path="/checkout" render={() => <CheckoutContainer />} />
      <UserRoute
        path="/dashboard"
        render={({ match }) => {
          props.setActive('Dashboard')
          return <Dashboard match={match} />
        }}
      />
      <UserRoute exact path="/profile" render={() => <UserProfile />} />
      <UserRoute exact path="/myorders" render={() => <UserOrders />} />
      <UserRoute exact path="/admin" render={() => <Admin />} />
      <Footer />
    </>
  </ResponsiveWrapper>
)

class App extends Component {
  componentDidMount () {
    this.props.authenticate()
    this.props.getCategories()
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/admindashboard" render={() => <AdminLayout />} />
          <Route path="/" render={() => <Routes {...this.props} />} />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  getCategoryProducts: id => dispatch(getCategoryProducts(id)),
  searchProducts: searchTerm => {
    dispatch(searchProducts(searchTerm))
  },
  getCart: () => dispatch(getCart()),
  getCategories: () => dispatch(fetchCategories()),
  authenticate: () => dispatch(authenticate()),
  setActive: page => dispatch(setActive(page))
})

const mapStateToProps = state => ({
  categories: state.categories.list,
  loading: state.categories.loading,
  user: state.user
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
