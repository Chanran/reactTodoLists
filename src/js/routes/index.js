import React,{Component} from 'react'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import IndexPage from '../containers/IndexPage'
import LoginPage from '../containers/LoginPage'
import WelcomePage from '../components/Welcome'
import NotFoundPage from '../components/NotFound'

import { isAuth } from '../utils/auth'

export default class Routes extends Component{
  constructor(props, context) {
    super(props, context)
    this.checkAuth = this.checkAuth.bind(this)
  }
  
  checkAuth(nextState, replaceState) {
    // 未登录则默认跳转到/login页
    if (!isAuth()) {
      replaceState(
        {
          pathname: '/login'
        }
      )
    }
  }

  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={WelcomePage} />
          <Route path='index' 
                 component={IndexPage}
                 onEnter={this.checkAuth} />
          <Route path='login' 
                 component={LoginPage}
                  />
        </Route>
        {/* 404页 */}
        <Route path="*" component={NotFoundPage} />
      </Router>
    )
  }
}