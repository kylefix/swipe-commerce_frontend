const filterNulls = props =>
  Object.entries(props).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value != null ? value : undefined
    }),
    {}
  )

// prettier-ignore
const getColumns = (row, items) =>
  row
    .sort((a, b) => a.x - b.x)
    .map(column => {
      const item = items.find(item => item.i === column.i)
      return {
        type: 'Grid.Column',
        props: {
          ...filterNulls(item.props),
          width: column.w
        }
      }
    })

const getChildren = (layout, items, rowProps) => {
  const rows = layout.reduce(
    (acc, column) => ({
      ...acc,
      [column.y]: (acc[column.y] || []).concat(column)
    }),
    {}
  )

  return Object.values(rows)
    .sort((a, b) => a.x - b.x)
    .map((row, index) => ({
      type: 'Grid.Row',
      props: {
        ...rowProps[index],
        children: getColumns(row, items, rowProps)
      }
    }))
}

export default (layout, items, gridProps, rowProps) => {
  return {
    type: 'Grid',
    props: {
      ...gridProps,
      children: getChildren(layout, items, rowProps)
    }
  }
}
