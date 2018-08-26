import {
  TEST_DATA,
  CHECKOUT_TEST_DATA,
  HOMEPAGE_TEST_DATA,
  PRODUCT_DETAIL_TEST_DATA
} from '../components/AdminLayout/Pages/Canvas/constants'

const SET_PAGE = 'SET_PAGE'

export const setPage = (name, value) => ({
  type: SET_PAGE,
  name,
  value
})

export const fetchPage = page => dispatch => {
  const doAsync = async () => {
    // TODO
  }
  doAsync()
}

export const pages = (
  state = {
    pages: {
      cart: TEST_DATA,
      checkout: CHECKOUT_TEST_DATA,
      homepage: HOMEPAGE_TEST_DATA,
      productDetail: PRODUCT_DETAIL_TEST_DATA
    }
  },
  action
) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.name]: action.value
        }
      }
    default:
      return state
  }
}
