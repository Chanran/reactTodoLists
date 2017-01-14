import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Devtools from '../containers/DevTools'
import reducers from '../reducers/index'
import Container from '../containers/Container'
//import Routes from '../routes'

console.log(reducers)

let store = createStore(reducers)



import '../../css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Container />
      <Devtools />
    </div>
  </Provider>,
  document.getElementById('container')
)