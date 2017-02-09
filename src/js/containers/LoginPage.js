import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import LoginForm from '../components/LoginForm.js'

import '../../css/index.css'

class LoginPage extends Component{
  constructor(props,context){
    super(props,context)
    this.login = this.login.bind(this)
  }  

  login(){
    let {username,password} = this.props.login
    let init = {
      method:'post',
      headers:{
        'Content-Type':'application/json'  
      },
      mode:'cors',
      cache:'default',
      body:JSON.stringify({username:username,password:password})
    }
    fetch('http://localhost:3001/test',init).then((res) => {
      console.log(res)
      return res.json()
    }).then(function(data){
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    const {dispatch} = this.props

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
        <LoginForm changeUsername={ (username) => dispatch(actions.changeUsername(username)) }
                   changePassword={ (password) => dispatch(actions.changePassword(password)) }
                   login={this.login} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    login:state.login
  }
}

export default connect(mapStateToProps)(LoginPage)