import React,{Component,PropTypes} from 'react'

import Avatar from '../components/Avatar'
import UsernameInput from '../components/UsernameInput'
import PasswordInput from '../components/PasswordInput'

export default class LoginForm extends Component{
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let styles = {
      root:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      }
    }
    return (
      <div style={styles.root}>
        <Avatar />
        <UsernameInput />
        <PasswordInput />
      </div>
    )
  }
  
}