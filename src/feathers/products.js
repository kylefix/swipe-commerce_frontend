import app from '../feathers'
const Products = app.service('products')

// async function * paginate (fn, query, page) {
//   let done = false
//   while (!done) {
//     const { data, skip, limit, total } = await fn(query)
//     yield data
//     const nextSkip = skip + limit
//     done = nextSkip > total
//   }
// }

export const getAllProducts = async () => Products.find()

export const filterProductBy = async query => Products.find({ query })

export const getProduct = async id => Products.get(id)

export const getProducts = async ids => {
  try {
    if (!ids.length) return { data: [] }
    return Products.find({
      query: { findIds: ids }
    })
  } catch (e) {
    console.log(`Error gettings products! ${e}`)
  }
}

export const getSellersProducts = async () => {
  try {
    return getProducts(app.get('user').seller.productIds)
  } catch (e) {
    console.log(`Error gettings sellers products! ${e}`)
  }
}

export const createProduct = async data => {
  try {
    return Products.create(data)
  } catch (e) {
    console.log(`Error Creating product! ${e}`)
  }
}

export const patchProduct = async data => {
  try {
    const { _id } = data
    delete data._id
    console.log(data)
    return Products.patch(_id, data)
  } catch (e) {
    console.log(`Error Patching product! ${e}`)
  }
}

export const removeProduct = async id => {
  try {
    return Products.remove(id)
  } catch (e) {
    console.log(`Error Removing product! ${e}`)
  }
}
