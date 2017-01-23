import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,compose} from 'redux'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Devtools from './containers/DevTools'
import reducers from './reducers/index'
import IndexPage from './pages/IndexPage'
import Routes from './routes'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const enhancer = compose(
  Devtools.instrument()
);

let store = createStore(reducers,enhancer)

import '../css/index.css'

ReactDOM.render(
  <Provider  store={store}>
    <MuiThemeProvider>
      {/*<div>*/}
        <Routes />
        {/* <Devtools />*/ } 
      {/*</div>*/}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('container')
)