import { combineReducers } from 'redux'
import { user } from './user'
import { products } from './products'
import { cart } from './cart'
import { categories } from './categories'
import { active } from './active'
import { seller } from './seller'
import { orders } from './orders'
import { admin } from './admin'
import { pages } from './pages'
import { reviews } from './reviews'

const rootReducer = combineReducers({
  user,
  products,
  cart,
  categories,
  active,
  seller,
  orders,
  admin,
  pages,
  reviews
})

export default rootReducer
