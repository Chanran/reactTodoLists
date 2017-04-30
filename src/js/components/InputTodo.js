import React,{Component,PropTypes} from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class InputTodo extends Component{

  constructor(props,context){
    super(props,context)
    this.addTodoKeydown = this.addTodoKeydown.bind(this)
    this.addTodoClick = this.addTodoClick.bind(this)
  }

  addTodoKeydown(e){
    if(e.which === 13){
      e.preventDefault()
      const text = this.textField.input.value.trim()
      if(text.length > 0){
        this.props.newTodo(text)
        this.textField.input.value = ''
      }  
    }
  }

  addTodoClick(e){
    e.preventDefault()
    const text = this.textField.input.value.trim()
    if(text.length > 0){
      this.props.newTodo(text)
      this.textField.input.value = ''
    }
  }

  render(){
    const styles = {
      root:{
        marginBottom: '10px'
      },
      textField: {
        display: 'inline-block',
        width: '180px'
      },
      button: {
        marginLeft: '10px'
      }
    }

    return (
      <div style={styles.root}>
        <TextField floatingLabelText="添加新事务"
                   hintText="登录后可见"
                   style={styles.textField}
                   ref={(ref) => this.textField = ref}
                   autoFocus='true' 
                   onKeyDown={this.addTodoKeydown} />
        <RaisedButton primary={true}
                      label='添 加'
                      style={styles.button}
                      onClick={this.addTodoClick} />
      </div>
    )
  }
}   

InputTodo.propTypes = {
  newTodo:PropTypes.func.isRequired
}
