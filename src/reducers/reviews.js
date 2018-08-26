import { createReview } from '../feathers/review'
// ACTIONS

const OPEN_REVIEW = 'OPEN_REVIEW'
const SET_REVIEW = 'SET_CUSTOMER_REVIEW'

const setReview = review => ({
  type: SET_REVIEW,
  review
})

export const submitReview = data => dispatch => {
  const asyncFetch = async () => {
    try {
      const review = await createReview(data) // userId, productId
      dispatch(setReview(review))
    } catch (e) {
      console.log(`Failed creating review! ${e}`)
    }
  }
  asyncFetch()
}

export const reviews = (
  state = {
    reviews: [],
    reviewFormLoaded: false
  },
  action
) => {
  switch (action.type) {
    case OPEN_REVIEW:
      return { ...state, reviewFormLoaded: true }
    case SET_REVIEW:
      const reviews = state.reviews.concat(action.payload)
      return {
        ...state,
        reviews,
        reviewFormLoaded: false
      }
    default:
      return state
  }
}
