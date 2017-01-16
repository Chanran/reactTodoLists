import React,{Component} from 'react'
import {Router,Route,browserHistory} from 'react-router'

import Container from '../containers/Container'

export default class Routes extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render(){
    return(
      <Router history={browserHistory} >
        <Route path='/' component={Container} />
      </Router>
    )
  }
}