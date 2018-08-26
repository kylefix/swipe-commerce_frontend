import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'

import rootReducer from '../reducers/rootReducer'
import storage from 'redux-persist/lib/storage'

export default function configureStore (preloadedState) {
  const middleware = [thunk]
  const middleEnhancer = applyMiddleware(...middleware)
  const persistConfig = {
    key: 'root',
    whitelist: ['admin', 'pages'],
    storage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const storeEnhancer = [middleEnhancer]
  const composedEnhancer = composeWithDevTools(...storeEnhancer)

  const store = createStore(persistedReducer, preloadedState, composedEnhancer)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default
        store.replaceReducer(persistReducer(newRootReducer, persistConfig))
      })
    }
  }

  return store
}
