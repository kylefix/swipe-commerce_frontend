import React from 'react'
import PropTypes from 'prop-types'

import InteractiveColumn from './InteractiveColumn/InteractiveColumn'

import InteractiveGridLayout from './InteractiveGridLayout'

import { ROW_HEIGHT } from '../constants'

const propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  changeComponentLayout: PropTypes.func.isRequired,
  removeCanvasComponent: PropTypes.func.isRequired,
  addCanvasComponent: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  layout: PropTypes.array.isRequired,
  activeGrid: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  openModals: PropTypes.object.isRequired,
  onSubmitProps: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
}

const columnStyle = {
  background: '#FFFFFF',
  boxShadow: '7px 7px 2px 0 rgba(34, 36, 38, 0.15)',
  borderRadius: '0.5em',
  padding: '0.5em',
  border: '1px solid rgba(34, 36, 38, 0.15)'
}

const InteractiveGrid = ({
  changeComponentLayout,
  onLayoutChange,
  onRemoveItem,
  items,
  activeGrid,
  setModal,
  openModals,
  onSubmitProps,
  page,
  layout,
  removeCanvasComponent,
  addCanvasComponent
}) => (
  <InteractiveGridLayout
    isDraggable={activeGrid}
    isResizable={activeGrid}
    compactType="horizontal"
    onLayoutChange={onLayoutChange}
    cols={16}
    rowHeight={ROW_HEIGHT}
    layout={layout.length ? layout : items}
  >
    {items.map(column => (
      <div style={columnStyle} key={column.i}>
        <InteractiveColumn
          removeCanvasComponent={removeCanvasComponent}
          changeComponentLayout={changeComponentLayout}
          addCanvasComponent={addCanvasComponent}
          onSubmitProps={onSubmitProps}
          onRemoveItem={onRemoveItem}
          openModals={openModals}
          setModal={setModal}
          column={column}
          page={page}
        />
      </div>
    ))}
  </InteractiveGridLayout>
)

InteractiveGrid.propTypes = propTypes

export default InteractiveGrid
