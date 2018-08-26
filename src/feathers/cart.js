import app from '../feathers'
import { filterProductBy } from '../feathers/products'
const Cart = app.service('carts')

const filterProducts = (products, productId, qty) => {
  let i = 0
  return products.filter(product => {
    if (i === qty) return false
    if (product.productId !== productId) return false
    i++
    return true
  })
}

const formatCart = products =>
  products.reduce(
    (acc, product) => ({
      ...acc,
      [product.productId]: (acc[product.productId] || 0) + 1
    }),
    {}
  )

export const getCartProducts = async cart => {
  if (!cart || !cart.length) return []
  try {
    const idsAndQuantities = formatCart(cart)
    const products = await filterProductBy({
      _id: { $in: Object.keys(idsAndQuantities) }
    })

    return products.data.map(product => ({
      ...product,
      quantity: idsAndQuantities[product._id.toString()]
    }))
  } catch (e) {
    console.log(`Error fetching products! ${e}`)
  }
}

export const getCart = async cartId => {
  try {
    const cartId = app.get('user').customer.cartId
    const cart = await Cart.get(cartId)

    return cart.cartProducts
  } catch (e) {
    console.log(`Error getting cart! ${e}`)
  }
}

export const addToCart = async (productId, qty) => {
  try {
    const cartId = app.get('user').customer.cartId

    await Cart.get(cartId)

    const productIds = [...Array(qty)].fill({ productId })
    const cart = await Cart.patch(cartId, {
      $push: { cartProducts: { $each: productIds } }
    })

    console.log({ cart })

    return cart.cartProducts
  } catch (e) {
    console.log(`Error adding to cart! ${e}`)
  }
}

export const removeFromCart = async (productId, qty) => {
  try {
    const cartId = app.get('user').customer.cartId
    const { cartProducts } = await Cart.get(cartId)
    const toRemove = filterProducts(cartProducts, productId, qty).map(
      cartProduct => cartProduct._id
    )

    const updatedCart = await Cart.patch(cartId, {
      $pull: {
        cartProducts: { _id: { $in: toRemove } }
      }
    })

    return updatedCart.cartProducts
  } catch (e) {
    console.log(`Error adding to cart! ${e}`)
  }
}
