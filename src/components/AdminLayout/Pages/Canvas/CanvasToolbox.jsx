import React from 'react'
import PropTypes from 'prop-types'

import { Menu, Icon, Dropdown, Button } from 'semantic-ui-react'

import InteractiveColumnSettings from './InteractiveGrid/InteractiveColumn/InteractiveColumnSettings'
import GridPropTypes from '../../../../propTypes/Grid.info.json'

const propTypes = {
  onAddRow: PropTypes.func.isRequired,
  onAddColumn: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  pages: PropTypes.object.isRequired,
  onSubmitProps: PropTypes.func.isRequired,
  openModals: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  gridProps: PropTypes.object.isRequired,
  rowProps: PropTypes.array.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired
}

const GridSettings = props => (
  <Menu.Item name="settings" {...props}>
    <Icon name="settings" />
    Settings
  </Menu.Item>
)

const CanvasToolbox = ({
  onAddRow,
  onAddColumn,
  onSave,
  onChangePage,
  page,
  onSubmitProps,
  openModals,
  gridProps,
  pages,
  setModal,
  rowProps,
  canUndo,
  canRedo,
  onUndo,
  onRedo
}) => (
  <Menu color="blue" inverted borderless fluid size="small">
    <Menu.Item name="add" onClick={onAddRow}>
      <Icon name="table" />
      Add Row
    </Menu.Item>

    <Menu.Item name="column" onClick={onAddColumn}>
      <Icon name="sticky note" />
      Add Column
    </Menu.Item>

    <InteractiveColumnSettings
      trigger={GridSettings}
      i="grid"
      name="grid"
      rowProps={rowProps}
      column={{
        type: 'grid',
        i: 'grid',
        props: {
          types: GridPropTypes.props,
          ...gridProps,
          children: []
        }
      }}
      page={page}
      onSubmitProps={onSubmitProps}
      modalOpen={!!openModals['grid']}
      setModal={setModal}
      initial="grid"
    />

    <Dropdown defaultValue="cart" color="blue" item text="Change Page">
      <Dropdown.Menu>
        {Object.keys(pages).map(page => (
          <Dropdown.Item
            key={page}
            value={page}
            color="blue"
            onClick={() => onChangePage(page)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>

    <Menu.Item name="undo" disabled={!canUndo} onClick={onUndo}>
      <Icon name="undo" />
      Undo
    </Menu.Item>

    <Menu.Item name="redo" disabled={!canRedo} onClick={onRedo}>
      <Icon name="redo" />
      Redo
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>
        <Button
          style={{ boxShadow: 'rgba(39, 0, 0, 0.38) 5px 1px 1px 0px' }}
          inverted
          circular
          onClick={onSave}
        >
          Save
        </Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

CanvasToolbox.propTypes = propTypes

export default CanvasToolbox
