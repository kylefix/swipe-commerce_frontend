import {
  getSellersProducts,
  createProduct,
  patchProduct,
  removeProduct
} from '../feathers/products'

import { getOrders } from '../feathers/orders'

const SET_PRODUCTS = 'SET_SELLER_PRODUCTS'
const SET_ORDERS = 'SET_SELLER_ORDERS'
const SET_LOADING = 'SET_SELLER_PRODUCTS_LOADING'
const SET_PRODUCT = 'SET_SELLER_PRODUCT'
const SET_PRODUCT_FILTER = 'SET_PRODUCT_FILTER'
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'
const SET_PRICE_FILTER = 'SET_PRICE_FILTER'
const UNSET_PRODUCT = 'DELETE_SELLER_PRODUCT'

const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

const setOrders = orders => ({
  type: SET_ORDERS,
  orders
})

const setLoading = () => ({
  type: SET_LOADING
})

const setProduct = product => ({
  type: SET_PRODUCT,
  product
})

const unsetProduct = productId => ({
  type: UNSET_PRODUCT,
  productId
})

export const setFilter = filter => ({
  type: SET_PRODUCT_FILTER,
  filter
})

export const setCategoryFilter = filter => ({
  type: SET_CATEGORY_FILTER,
  filter
})

export const setPriceFilter = filter => ({
  type: SET_PRICE_FILTER,
  filter
})

export const fetchProducts = () => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const products = await getSellersProducts()
      dispatch(setProducts(products.data))
    } catch (e) {
      console.log(`Failed fetching seller's products ${e}`)
    }
  }
  asyncFetch()
}

// refactor to use populate?
export const fetchOrders = type => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const orders = await getOrders(type)
      dispatch(setOrders(orders.data))
    } catch (e) {
      console.log(`Failed fetching seller's products ${e}`)
    }
  }
  asyncFetch()
}

export const submitProduct = data => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const product = await createProduct(data)
      dispatch(setProduct(product))
    } catch (e) {
      console.log(`Failed creating product! ${e}`)
    }
  }
  asyncFetch()
}

export const editProduct = data => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const product = await patchProduct(data)
      dispatch(setProduct(product))
    } catch (e) {
      console.log(`Failed creating product! ${e}`)
    }
  }
  asyncFetch()
}

export const deleteProduct = data => dispatch => {
  dispatch(setLoading())
  const asyncFetch = async () => {
    try {
      const product = await removeProduct(data)
      dispatch(unsetProduct(product))
    } catch (e) {
      console.log(`Error removing product! ${e}`)
    }
  }
  asyncFetch()
}

export const seller = (
  state = {
    products: {},
    loading: false,
    filter: {
      price: {
        minVal: 0,
        maxVal: Infinity
      }
    }
  },
  action
) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const products = action.products.reduce(
        (acc, product) => ({
          ...acc,
          [product._id]: product
        }),
        {}
      )
      return {
        ...state,
        products,
        loading: false
      }
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_PRODUCT:
      return {
        ...state,
        loading: false,
        products: {
          ...state.products,
          [action.product._id]: action.product
        }
      }
    case UNSET_PRODUCT:
      return {
        ...state,
        loading: false,
        products: {
          ...state.products,
          [action.productId]: undefined
        }
      }
    case SET_PRODUCT_FILTER:
    case SET_PRICE_FILTER:
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.filter
        }
      }
    default:
      return state
  }
}
