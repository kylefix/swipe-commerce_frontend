import {
  filterProductBy,
  getProduct as doGetProduct
} from '../feathers/products'

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_PRODUCT = 'SET_PRODUCT'
const SET_LOADING = 'SET_LOADING_PRODUCTS'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const setProduct = product => ({
  type: SET_PRODUCT,
  product
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const searchProducts = searchTerm => async dispatch => {
  try {
    dispatch(setLoading())
    const products = await filterProductBy({
      $search: searchTerm
    })
    dispatch(setProducts(products.data))
  } catch (e) {
    console.log(`Error fetching products: ${e}`)
  }
}

export const getCategoryProducts = id => async dispatch => {
  try {
    dispatch(setLoading())
    const products = await filterProductBy({
      categoryId: id
    })
    dispatch(setProducts(products.data))
  } catch (e) {
    console.log(`Error fetching products: ${e}`)
  }
}

export const getProduct = productId => async dispatch => {
  try {
    dispatch(setLoading())
    const product = await doGetProduct(productId)
    dispatch(setProduct(product))
  } catch (e) {
    console.log(`Error fetching product: ${e}`)
  }
}

export const products = (
  state = {
    products: [],
    product: {},
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
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: [...action.products]
      }
    case SET_PRODUCT:
      return {
        ...state,
        loading: false,
        product: action.product
      }

    default:
      return state
  }
}
