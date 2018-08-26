import {
  authenticate as doAuthenticate,
  logout as doLogout
} from '../feathers/authentication'
import { getCart } from './cart'

const SET_USER = 'SET_USER'
const SET_LOADING = 'SET_USER_LOADING'

export const setUser = user => ({
  type: SET_USER,
  user
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const authenticate = () => dispatch => {
  dispatch(setLoading())
  const doAsync = async () => {
    try {
      const user = await doAuthenticate()
      if (!user._id) return
      dispatch(setUser(user))
      dispatch(getCart())
    } catch (e) {
      console.log(`Error authenticating! ${e}`)
    }
  }
  doAsync()
}

export const logout = () => async dispatch => {
  await doLogout()
  dispatch(setUser({}))
}

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.user,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
