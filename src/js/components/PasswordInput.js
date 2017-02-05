import React,{Component,PropTypes} from 'react'
import TextField from 'material-ui/TextField'


export default class PasswordInput extends Component{
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    let styles = {
      root:{
        margin:'0 auto 20px'
      }
    }
    return (
      <TextField ref='password'
                 hintText='6~16位' 
                 floatingLabelText='请输入密码' 
                 type="password"
                 style={styles.root} />
    )
  }
}