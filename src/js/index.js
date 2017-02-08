import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import IndexPage from './pages/IndexPage'
import Routes from './routes'
import store from './store/index'
import Devtools from './containers/DevTools'

import '../css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Routes />
        <Devtools />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('container')
)