import app from '../feathers'
const Transactions = app.service('transactions')
const Orders = app.service('orders')

export const createTransaction = async (total, token) => {
  try {
    const userId = app.get('user')._id
    const cartId = app.get('user').customer.cartId

    const orderId = await Orders.create({
      cartId,
      userId,
      status: 0
    })

    const response = await Transactions.create({
      orderId,
      total,
      token
    })

    return response
  } catch (e) {
    console.log(`Error creating transaction! ${e}`)
  }
}

export const getTransactionById = async transactionId => {
  try {
    const transaction = await Transactions.get(transactionId)
    return transaction
  } catch (e) {
    console.log(`Error fetching transaction! ${transactionId} ${e}`)
  }
}
