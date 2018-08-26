import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import 'semantic-ui-css/semantic.css'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import './App.css'
import Loading from './components/.common/Loading'

import firebase from './firebase' // eslint-disable-line no-unused-vars

import configureStore from './store/configureStore'
// import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')

const store = configureStore()
const persistor = persistStore(store)

const render = () => {
  const App = require('./App').default
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    rootEl
  )
}

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App.jsx', () => {
      setTimeout(render)
    })
  }
}

render()

// registerServiceWorker()
