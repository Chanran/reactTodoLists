import React,{Component} from 'react'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import IndexPage from '../containers/IndexPage'
import LoginPage from '../containers/LoginPage'
import NotFound from '../components/NotFound'

export default class Routes extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={IndexPage} />
          <Route path='/index' 
                component={IndexPage} />
          <Route path='/login' 
                component={LoginPage} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    )
  }
}