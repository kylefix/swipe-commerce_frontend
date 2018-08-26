import { DEFAULT_COLUMN } from '../components/AdminLayout/Pages/Canvas/constants'
import { sanitizeProps } from './sanitizeProps'

const newItem = (x, y, item) => ({
  ...DEFAULT_COLUMN,
  x,
  y,
  w: item.props.width || 16, // wrong should split evenly I think if not defined
  h: 1,
  props: item.props
})

const parseColumns = (columns, rowIndex) => {
  let nextX = 0

  return columns.map(column => {
    if (column.type !== 'Grid.Column') {
      throw new Error(
        `Row must only be followed by columns! Found: ${column.type}`
      )
    }
    const item = newItem(nextX, rowIndex, column)
    nextX += item.w + 1
    return item
  })
}
const parseRows = (rows, rowIndex = -1) =>
  rows.reduce((acc, child) => {
    if (child.type === 'Grid.Row') {
      const rowProps = withoutChildren(child.props)
      return acc.concat({
        rowProps,
        columns: parseColumns(child.props.children, ++rowIndex)
      })
    }
    if (child.type === '$if') {
      /// ///////////////////////////
      // TODO: IGNORING $if FOR NOW
      /// //////////////////////////
      /// //////////////////////////
      const SELECTED = child.props.children[0]
      if (SELECTED.type === '') {
        const rows = parseRows(SELECTED.props.children, rowIndex)
        const prows = rows.reduce(
          (acc, { rowProps, columns }) => acc.concat({ rowProps, columns }),
          []
        )
        return acc.concat(prows)
      }

      throw new Error(`Invalid type with $if ${SELECTED.type}`)
    }

    throw new Error(`Invalid type: ${child.type} must one of [Grid.Row|$if]`)
  }, [])

const withoutChildren = ({ children, ...props }) => props

export const jsonToLayout = json => {
  const data = {
    ...json,
    props: sanitizeProps(json.props)
  }
  console.log({ data })

  if (data.type !== 'Grid') {
    throw new Error(`First element must be Grid! Received: ${data.type}`)
  }

  const gridProps = withoutChildren(data.props)
  const rows = parseRows(data.props.children)
  const rowProps = rows.map(row => row.rowProps)

  const items = rows.reduce(
    (acc, { columns }, index) =>
      acc.concat(
        columns.map((column, columnIndex) => ({
          ...column,
          i: `existing_${index}_${columnIndex}`
        }))
      ),
    []
  )

  return {
    rowProps,
    gridProps,
    items
  }
}
