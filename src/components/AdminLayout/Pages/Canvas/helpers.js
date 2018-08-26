export const getLastRow = layout =>
  layout.length ? Math.max(...layout.map(column => column.y)) : 0

export const getAvailableRows = (layout, rowIndex) => {
  const lastRow = getLastRow(layout)

  return [...Array(lastRow + 1)]
    .map(
      (_, row) =>
        layout
          .filter(column => column.y === row)
          .sort((a, b) => a.x - b.x)
          .slice(-1)[0]
    )
    .filter(column => column.x + column.w < 16)
    .map(column => ({
      y: column.y,
      x: column.x + column.w
    }))
}

export const spaceCase = text => {
  const result = text.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}
