const TAX_RATE = 0.15

export const getTotal = cart =>
  cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0)

export const getTax = total => total * TAX_RATE

export const getTotalandTaxes = cart => {
  const total = getTotal(cart)
  return {
    total,
    tax: getTax(total)
  }
}
