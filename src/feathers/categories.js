import app from '../feathers'
const Categories = app.service('categories')

export const getCategories = async () => {
  try {
    return Categories.find({})
  } catch (e) {
    console.log('Error fetching categories!')
  }
}

export const createCategory = async name => {
  try {
    const response = await Categories.create({
      name
    })
    return response
  } catch (e) {
    console.log(`Error creating category! ${e}`)
  }
}

export const deleteCategory = async id => {
  try {
    const response = await Categories.remove(id)
    return response
  } catch (e) {
    console.log(`Error removing category! ${id} ${e}`)
  }
}
