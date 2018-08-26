import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  columns: PropTypes.array.isRequired,
  onPickColumn: PropTypes.func.isRequired
}

const getPlaceHolderStyle = column => ({
  background: 'rgb(255, 255, 255)',
  boxShadow: 'rgba (34, 36, 38, 0.15) 0px 1px 2px 0px',
  borderRadius: '0.285714rem',
  padding: '0.5em',
  border: '1px solid rgba (34, 36, 38, 0.15)',
  width: '60px',
  height: '100px',
  top: '0px',
  position: 'absolute',
  touchAction: 'none',
  backgroundColor: 'green',
  opacity: 0.2,
  transform: `translate(${10 + 70 * column.x}px, ${10 + 110 * column.y}px)`
})

const Placeholders = ({ columns, onPickColumn }) => {
  return columns.map((column, index) => (
    <div
      onClick={() => onPickColumn(column)}
      key={index}
      style={getPlaceHolderStyle(column)}
    />
  ))
}

Placeholders.propTypes = propTypes

export default Placeholders
