import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/loginActions'
import LoginForm from '../components/LoginForm.js'

import '../../css/index.css'

class LoginPage extends Component{
  constructor(props,context){
    super(props,context)
    this.login = this.login.bind(this)
  }

  login() {
    let { login, confirmLogin } = this.props
    confirmLogin(login.username, login.password)
  }

  render(){
    const { changeUsername, changePassword } = this.props

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
        <LoginForm changeUsername={changeUsername}
                   changePassword={changePassword}
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

function mapDispatchToProps(dispatch){
  return {
    changeUsername: (username) => dispatch(actions.changeUsername(username)),
    changePassword: (password) => dispatch(actions.changePassword(password)),
    confirmLogin: (username, password) => dispatch(actions.login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)