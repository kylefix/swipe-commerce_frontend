import {
  getCart as fetchCart,
  addToCart as doAddToCart,
  removeFromCart as doRemoveFromCart,
  getCartProducts as fetchCartProducts
} from '../feathers/cart'

const SET_CART = 'SET_CART'
const SET_LOADING = 'SET_LOADING_CART'

const setCart = products => ({
  type: SET_CART,
  products
})

const setLoading = () => ({
  type: SET_LOADING
})

export const getCart = () => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const cart = await fetchCart()
      const withProducts = await fetchCartProducts(cart)
      dispatch(setCart(withProducts))
    } catch (e) {
      console.log(`Error getting cart! ${e}`)
    }
  }
  asyncFetch()
}

export const incrementCart = (productId, qty) => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const cart = await doAddToCart(productId, qty)
      const withProducts = await fetchCartProducts(cart)
      dispatch(setCart(withProducts))
    } catch (e) {
      console.log(`Error pushing to cart! ${productId} ${e}`)
    }
  }
  asyncFetch()
}

export const decrementCart = (productId, qty) => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const cart = await doRemoveFromCart(productId, qty)
      const withProducts = await fetchCartProducts(cart)
      dispatch(setCart(withProducts))
    } catch (e) {
      console.log(`Error changing quantity in cart!  ${e}`)
    }
  }
  asyncFetch()
}

export const cart = (
  state = {
    products: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_CART:
      return {
        ...state,
        products: action.products,
        loading: false
      }
    default:
      return state
  }
}
