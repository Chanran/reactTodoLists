import React,{Component,PropTypes} from 'react'
import TextField from 'material-ui/TextField'


export default class UsernameInput extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <div>
        <TextField hintText='用户名即您的昵称' floatingLabelText='请输入用户名' />
      </div>
    )
  }
}