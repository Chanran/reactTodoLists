import React,{Component,PropTypes} from 'react'

export default class LoginTips extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    let styles = {
      root:{
        fontSize:'1px',
        color:'gray'
      }
    }
    return (
      <p style={styles.root}>输入用户名和密码即可登录</p>
    )
  }
}