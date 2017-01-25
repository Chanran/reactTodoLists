import React,{Component,PropTypes} from 'react'

import * as actions from '../actions'
import LoginForm from '../containers/LoginForm.js'

import '../../css/index.css'

export default class LoginPage extends Component{
  constructor(props,context){
    super(props,context)
  }  

  render(){

    let bgImg = './img/bg.jpg'

    let styles = {
      root:{
        border:'1px solid rgba(255,255,255,0)',
        boxSizing:'border-box',
        height:'100%',
        width:'100%',
        background:'url('+bgImg+') 100% 100%',
      }
    }

    return(
      <div style={styles.root}>
        <LoginForm />
      </div>
    )
  }
}