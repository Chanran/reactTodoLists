import React,{Component,PropTypes} from 'react'
import TextField from 'material-ui/TextField'


export default class UsernameInput extends Component{
  constructor(props, context) {
    super(props, context)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(){
    let username  = this.usernameInput.input.value
    this.props.changeUsername(username)
  }

  render() {
    return (
      <TextField ref={(ref) => this.usernameInput = ref}
                 hintText='用户名即您的昵称'
                 floatingLabelText='请输入用户名'
                 onChange={this.handleOnChange} />
    )
  }
}