import React, { Component } from 'react'

import Avatar from './Avatar'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput'
import LoginTips from './LoginTips'
import LoginButtons from './LoginButtons'

export default class LoginForm extends Component{
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let styles = {
      root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'50px 20px',
        borderRadius:'10px',
        background:'rgba(255,255,255,1)',
      }
    }
    return (
      <div style={styles.root}>
        <Avatar />
        <UsernameInput changeUsername={ this.props.changeUsername } />
        <PasswordInput changePassword={ this.props.changePassword } />
        <LoginTips />
        <LoginButtons login={this.props.login} />
      </div>
    )
  }
  
}