import app from '../feathers'
const Reviews = app.service('reviews')

// data => userId, productId, rating

export const createReview = async data => {
  try {
    return Reviews.create(data)
  } catch (error) {
    console.log(`Error creating reviews ${error}`)
  }
}
