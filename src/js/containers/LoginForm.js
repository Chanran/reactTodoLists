import React,{Component,PropTypes} from 'react'

import Avatar from '../components/Avatar'
import UsernameInput from '../components/UsernameInput'
import PasswordInput from '../components/PasswordInput'
import LoginTips from '../components/LoginTips'
import LoginButtons from '../components/LoginButtons'

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
        <UsernameInput />
        <PasswordInput />
        <LoginTips />
        <LoginButtons />
      </div>
    )
  }
  
}