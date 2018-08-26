import app from '../feathers'
const Orders = app.service('orders')

// refactor this
export const getOrders = async type => {
  try {
    const orderIds = app.get('user')[type].orderIds
    const orders = await Promise.all(
      orderIds.map(orderId => Orders.get(orderId))
    )
    return { data: orders }
  } catch (e) {
    console.log(`Error fetching orders! ${e}`)
  }
}

export const getOrderById = async orderId => {
  try {
    const order = await app.service('orders').get(orderId)
    return order
  } catch (e) {
    console.log(`Error fetching order! ${orderId} ${e}`)
  }
}
