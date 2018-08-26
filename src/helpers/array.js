export const removeAtIndex = (xs, targetIndex) =>
  xs.filter((_, index) => index !== targetIndex)

export const push = (xs, x) => xs.concat(x)

export const replaceAtIndex = (xs, x, index) => [
  ...xs.slice(0, index),
  x,
  ...xs.slice(index + 1)
]
