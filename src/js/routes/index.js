import React,{Component} from 'react'
import {Router,Route,hashHistory} from 'react-router'

import NavigateBar from '../containers/NavigateBar.js'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'

export default class Routes extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/index' component={IndexPage} />
        <Route path='/login' component={LoginPage} />
      </Router>
    )
  }
}