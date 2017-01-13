import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers'
import Container from '../containers/Container'
//import Routes from '../routes'

let store = createStore(reducer)

import '../../css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('container')
)