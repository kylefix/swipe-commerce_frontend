import { getCategories } from '../feathers/categories'

const SET_CATEGORIES = 'GET_CATEGORIES'
const SET_LOADING = 'SET_LOADING_CATEGORIES'

const setLoading = () => ({
  type: SET_LOADING
})

const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
})

export const fetchCategories = () => async dispatch => {
  try {
    dispatch(setLoading())
    const categories = await getCategories()
    dispatch(setCategories(categories.data))
  } catch (e) {
    console.log(`Error fetching categories! ${e}`)
  }
}

export const categories = (
  state = {
    list: [],
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
    case SET_CATEGORIES:
      return {
        ...state,
        list: action.categories,
        loading: false
      }
    default:
      return state
  }
}
