import { getOrders } from '../feathers/orders'

const SET_ORDERS = 'SET_CUSTOMER_ORDERS'
const SET_LOADING = 'SET_CUSTOMER_LOADING'

const setOrders = orders => ({
  type: SET_ORDERS,
  orders
})

const setLoading = () => ({
  type: SET_LOADING
})

const parsedOrders = orders =>
  orders.map((order, index) => ({
    date: order.updatedAt,
    orderId: order._id,
    price: order.orderDetails.reduce((acc, details) => acc + details.price, 0)
  }))

export const fetchOrders = () => async dispatch => {
  try {
    dispatch(setLoading())
    const orders = await getOrders('customer')
    if (!orders) return
    console.log({ orders })
    const parsed = parsedOrders(orders.data)
    dispatch(setOrders(parsed))
  } catch (e) {
    console.log(`Couldn't fetch orders! ${e}`)
  }
}

export const orders = (
  state = {
    list: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        list: action.orders,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
