export const setPropertyAt = (obj, value, property) => ({
  ...obj,
  [property]: value
})

const setPropertyByPathArray = (obj, value, [...pathArray]) => {
  if (obj == null) throw new Error(`Invalid Path! ${pathArray}`)

  if (pathArray.length === 1) {
    return setPropertyAt(obj, value, pathArray[0])
  }

  const nextPath = pathArray.shift()

  return setPropertyAt(
    obj,
    setPropertyByPathArray(obj[nextPath], value, pathArray),
    nextPath
  )
}

export const setPropertyAtPath = (obj, value, path) =>
  setPropertyByPathArray(obj, value, path.split('.'))
