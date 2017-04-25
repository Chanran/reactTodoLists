import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routes from './routes'
import store from './store'

import '../css/index.css'

const styles = {
  root:{
    height:'100%',
    width:'100%'
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div style={styles.root}>
        <Routes />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('container')
)