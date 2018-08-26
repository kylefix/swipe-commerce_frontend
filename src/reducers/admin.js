import undoable, { includeAction } from 'redux-undo'
import { combineReducers } from 'redux'
import { replaceAtIndex } from '../helpers/array'
import layoutToJson from '../helpers/layoutToJson'
import { jsonToLayout } from '../helpers/jsonToLayout'
import { setPage, fetchPage as doFetchPage } from './pages'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// import { setPropertyAtPath } from '../helpers/object'

const SET_LOADING = 'SET_ADMIN_LOADING'
const SET_CANVAS_GRID_PROPS = 'SET_CANVAS_GRID_PROPS'
const SET_CANVAS_ROW_PROPS = 'SET_CANVAS_ROW_PROPS'
const SET_CANVAS_LAYOUT = 'SET_ADMIN_CANVAS_LAYOUT'
const SET_CANVAS_ITEM = 'SET_ADMIN_CANVAS_ITEMS'
const ADD_CANVAS_ITEM = 'ADD_ADMIN_CANVAS_ITEM'
const ADD_CANVAS_COMPONENT = 'ADD_ADMIN_CANVAS_COMPONENT'
const CHANGE_CANVAS_COMPONENT_LAYOUT = 'CHANGE_CANVAS_COMPONENT_LAYOUT'
const CHANGE_CANVAS_PAGE = 'CHANGE_ADMIN_CANVAS_PAGE'
const REMOVE_CANVAS_ITEM = 'REMOVE_ADMIN_CANVAS_ITEM'
const REMOVE_CANVAS_COMPONENT = 'REMOVE_ADMIN_CANVAS_COMPONENT'
const SET_DASHBOARD_LAYOUT = 'SET_DASHBOARD_LAYOUT'

export const setLoading = () => ({
  type: SET_LOADING
})

export const saveCanvas = page => (dispatch, getState) => {
  const doAsync = async () => {}
  doAsync()
  const ownState = getState()
  const json = layoutToJson(
    ownState.admin.canvas.present.layout,
    ownState.admin.canvas.present.items,
    ownState.admin.canvas.present.gridProps,
    ownState.admin.canvas.present.rowProps
  )
  dispatch(setPage(page, json))
}

export const fetchCanvasPage = page => (dispatch, getState) => {
  const doAsync = async () => {
    try {
      await dispatch(doFetchPage(page))
      const { items, gridProps, rowProps } = jsonToLayout(
        getState().pages.pages[page]
      )
      dispatch(changeCanvasPage(page, items, gridProps, rowProps))
    } catch (e) {
      console.log(`Error fetching page: ${page} \n ${e}`)
    }
  }
  doAsync()
}

export const setCanvasLayout = layout => ({
  type: SET_CANVAS_LAYOUT,
  layout
})

export const setCanvasGridProps = props => ({
  type: SET_CANVAS_GRID_PROPS,
  props
})

export const removeCanvasComponent = (componenti, i) => ({
  type: REMOVE_CANVAS_COMPONENT,
  componenti,
  i
})

export const setCanvasRowProps = (props, index) => ({
  type: SET_CANVAS_ROW_PROPS,
  props,
  index
})

export const addCanvasItem = item => ({
  type: ADD_CANVAS_ITEM,
  item
})

export const addCanvasComponent = (component, index) => ({
  type: ADD_CANVAS_COMPONENT,
  component,
  index
})

export const setDashboardLayout = layout => ({
  type: SET_DASHBOARD_LAYOUT,
  layout
})

const changeCanvasPage = (page, items, gridProps, rowProps) => ({
  type: CHANGE_CANVAS_PAGE,
  page,
  items,
  gridProps,
  rowProps
})

export const changeComponentLayout = (layout, index) => ({
  type: CHANGE_CANVAS_COMPONENT_LAYOUT,
  layout,
  index
})

export const removeCanvasItem = item => ({
  type: REMOVE_CANVAS_ITEM,
  item
})

export const setCanvasItem = (item, index) => ({
  type: SET_CANVAS_ITEM,
  item,
  index
})

const canvas = (
  state = {
    layout: [],
    items: [],
    nextKey: 0,
    page: '',
    gridProps: {},
    rowProps: []
  },
  action
) => {
  switch (action.type) {
    case SET_CANVAS_LAYOUT:
      return {
        ...state,
        layout: action.layout
      }
    case SET_CANVAS_ITEM:
      return {
        ...state,
        items: replaceAtIndex(state.items, action.item, action.index)
      }
    case ADD_CANVAS_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item),
        layout: state.layout.concat(action.item),
        nextKey: state.nextKey + 1
      }
    case REMOVE_CANVAS_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.i !== action.item)
      }
    case CHANGE_CANVAS_PAGE:
      return {
        ...state,
        page: action.page,
        items: action.items,
        layout: action.page !== state.page ? [] : state.layout,
        gridProps: action.gridProps,
        rowProps: action.rowProps
      }
    case CHANGE_CANVAS_COMPONENT_LAYOUT:
      const targetColumnIndex = state.items.findIndex(
        item => item.i === action.index
      )
      return {
        ...state,
        items: replaceAtIndex(
          state.items,
          {
            ...state.items[targetColumnIndex],
            props: {
              ...state.items[targetColumnIndex].props,
              children: action.layout
            }
          },
          targetColumnIndex
        )
      }
    case SET_CANVAS_GRID_PROPS:
      return {
        ...state,
        gridProps: action.props
      }
    case SET_CANVAS_ROW_PROPS:
      return {
        ...state,
        rowProps: replaceAtIndex(state.rowProps, action.props, action.index)
      }
    case REMOVE_CANVAS_COMPONENT:
      const targetCol = state.items.findIndex(item => item.i === action.i)
      const newComponents = state.items[targetCol].props.children.filter(
        comp => comp.type !== action.componenti
      )
      const newItems = {
        ...state.items[targetCol],
        props: {
          ...state.items[targetCol].props,
          children: newComponents
        }
      }
      return {
        ...state,
        items: replaceAtIndex(state.items, newItems, targetCol)
      }

    case ADD_CANVAS_COMPONENT:
      const targetIndex = state.items.findIndex(item => item.i === action.index)
      return {
        ...state,
        items: replaceAtIndex(
          state.items,
          {
            ...state.items[targetIndex],
            props: {
              ...state.items[targetIndex].props,
              children: state.items[targetIndex].props.children.concat({
                type: action.component,
                props: { children: [] }
              })
            }
          },
          targetIndex
        )
      }
    default:
      return state
  }
}

const dashboard = (
  state = {
    layout: PRESETS.default
  },
  action
) => {
  switch (action.type) {
    case SET_DASHBOARD_LAYOUT:
      return {
        ...state,
        layout: action.layout
      }
    default:
      return state
  }
}

export const PRESETS = {
  default: [
    { i: 'stat0', x: 0, y: 0, w: 4, h: 3, minW: 4, isResizable: false },
    { i: 'stat1', x: 4, y: 0, w: 4, h: 3, minW: 4, isResizable: false },
    { i: 'stat2', x: 8, y: 0, w: 4, h: 3, minW: 4, isResizable: false },
    { i: 'stat3', x: 12, y: 0, w: 4, h: 3, minW: 4, isResizable: false },
    { i: 'chart4', x: 0, y: 1, w: 8, h: 10, minW: 7, maxH: 20, minH: 10 },
    { i: 'chart5', x: 9, y: 1, w: 8, h: 10, minW: 7, maxH: 20, minH: 10 },
    { i: 'chart6', x: 0, y: 2, w: 8, h: 10, minW: 7, maxH: 20, minH: 10 },
    { i: 'chart7', x: 9, y: 2, w: 8, h: 10, minW: 7, maxH: 20, minH: 10 }
  ],
  leftSidebar: [
    {
      w: 4,
      h: 3,
      x: 0,
      y: 6,
      i: 'stat0',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 0,
      y: 3,
      i: 'stat1',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 0,
      y: 9,
      i: 'stat2',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 0,
      y: 0,
      i: 'stat3',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 12,
      h: 12,
      x: 4,
      y: 0,
      i: 'chart4',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 8,
      y: 12,
      i: 'chart5',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 0,
      y: 12,
      i: 'chart6',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 0,
      y: 22,
      i: 'chart7',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    }
  ],
  rightSidebar: [
    {
      w: 4,
      h: 3,
      x: 12,
      y: 9,
      i: 'stat0',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 12,
      y: 3,
      i: 'stat1',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 12,
      y: 6,
      i: 'stat2',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 12,
      y: 0,
      i: 'stat3',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 12,
      h: 12,
      x: 0,
      y: 0,
      i: 'chart4',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 8,
      y: 12,
      i: 'chart5',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 0,
      y: 12,
      i: 'chart6',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 0,
      y: 22,
      i: 'chart7',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    }
  ],
  blocks: [
    {
      w: 4,
      h: 3,
      x: 4,
      y: 0,
      i: 'stat0',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 0,
      y: 3,
      i: 'stat1',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 4,
      y: 3,
      i: 'stat2',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 0,
      y: 0,
      i: 'stat3',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 8,
      h: 14,
      x: 0,
      y: 6,
      i: 'chart4',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 8,
      y: 0,
      i: 'chart5',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 16,
      h: 10,
      x: 0,
      y: 20,
      i: 'chart6',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 8,
      h: 10,
      x: 8,
      y: 10,
      i: 'chart7',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    }
  ],
  bigGraphs: [
    {
      w: 4,
      h: 3,
      x: 0,
      y: 0,
      i: 'stat0',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 4,
      y: 0,
      i: 'stat1',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 8,
      y: 0,
      i: 'stat2',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 4,
      h: 3,
      x: 12,
      y: 0,
      i: 'stat3',
      minW: 4,
      moved: false,
      static: false,
      isResizable: false
    },
    {
      w: 16,
      h: 13,
      x: 0,
      y: 3,
      i: 'chart4',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 16,
      h: 16,
      x: 0,
      y: 16,
      i: 'chart5',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 16,
      h: 14,
      x: 0,
      y: 32,
      i: 'chart6',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    },
    {
      w: 16,
      h: 15,
      x: 0,
      y: 46,
      i: 'chart7',
      minW: 7,
      minH: 10,
      maxH: 20,
      moved: false,
      static: false
    }
  ]
}

const persistConfig = {
  key: 'canvas',
  whitelist: ['present'],
  storage
}
const shouldUndo = [
  SET_CANVAS_GRID_PROPS,
  SET_CANVAS_ROW_PROPS,
  SET_CANVAS_LAYOUT,
  SET_CANVAS_ITEM,
  ADD_CANVAS_ITEM,
  ADD_CANVAS_COMPONENT,
  CHANGE_CANVAS_COMPONENT_LAYOUT,
  REMOVE_CANVAS_ITEM,
  REMOVE_CANVAS_COMPONENT
]
const persistedCanvas = persistReducer(
  persistConfig,
  undoable(canvas, {
    filter: includeAction(shouldUndo),
    limit: 10
  })
)

export const admin = combineReducers({ canvas: persistedCanvas, dashboard })
