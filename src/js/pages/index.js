import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,compose} from 'redux'
import {Provider} from 'react-redux'

import Devtools from '../containers/DevTools'
import reducers from '../reducers/index'
import Container from '../containers/Container'
import Routes from '../routes'

const enhancer = compose(
  Devtools.instrument()
);

let store = createStore(reducers,enhancer)

import '../../css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
      <Devtools />
    </div>
  </Provider>,
  document.getElementById('container')
)