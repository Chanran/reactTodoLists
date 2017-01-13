import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers'
import Routes from '../routes'

let store = createStore(reducer)

import 'index.css'

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('container')
)