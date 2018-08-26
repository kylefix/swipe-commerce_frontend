import React from 'react'
import PropTypes from 'prop-types'

import CanvasToolbox from './CanvasToolbox'
import Placeholders from './Placeholders'
import InteractiveGrid from './InteractiveGrid/InteractiveGrid'

import { Grid } from 'semantic-ui-react'

const propTypes = {
  onAddRow: PropTypes.func.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  addCanvasComponent: PropTypes.func.isRequired,
  removeCanvasComponent: PropTypes.func.isRequired,
  changeComponentLayout: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onAddColumn: PropTypes.func.isRequired,
  onPickColumn: PropTypes.func.isRequired,
  onSubmitProps: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
  onChangePage: PropTypes.func.isRequired,
  layout: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  placeholders: PropTypes.array.isRequired,
  activeGrid: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  openModals: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  gridProps: PropTypes.object.isRequired,
  rowProps: PropTypes.array.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired
}

const columnStyle = {
  backgroundPosition: '24px, 0px',
  backgroundImage:
    'repeating-linear-gradient(90deg, white, white 60px, rgba(44, 111, 226, 0.00) 60px, rgba(44, 111, 226, 0.18) 70px)'
}

const Canvas = ({
  onAddRow,
  onLayoutChange,
  onRemoveItem,
  onAddColumn,
  onPickColumn,
  layout,
  items,
  placeholders,
  openModals,
  setModal,
  onSubmitProps,
  activeGrid,
  onChangePage,
  page,
  pages,
  onSave,
  gridProps,
  rowProps,
  addCanvasComponent,
  changeComponentLayout,
  removeCanvasComponent,
  onUndo,
  onRedo,
  canUndo,
  canRedo
}) => (
  <Grid>
    <Grid.Row style={{ paddingTop: '0' }}>
      <CanvasToolbox
        onSave={onSave}
        pages={pages}
        onAddRow={onAddRow}
        onAddColumn={onAddColumn}
        onChangePage={onChangePage}
        gridProps={gridProps}
        rowProps={rowProps}
        page={page}
        onSubmitProps={onSubmitProps}
        setModal={setModal}
        openModals={openModals}
        onUndo={onUndo}
        onRedo={onRedo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
    </Grid.Row>
    <Grid.Row>
      <Grid.Column style={columnStyle} width={16}>
        <InteractiveGrid
          removeCanvasComponent={removeCanvasComponent}
          changeComponentLayout={changeComponentLayout}
          addCanvasComponent={addCanvasComponent}
          layout={layout}
          onSubmitProps={onSubmitProps}
          setModal={setModal}
          openModals={openModals}
          activeGrid={activeGrid}
          onLayoutChange={onLayoutChange}
          onRemoveItem={onRemoveItem}
          page={page}
          items={items}
        />
        <Placeholders columns={placeholders} onPickColumn={onPickColumn} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

Canvas.propTypes = propTypes

export default Canvas
