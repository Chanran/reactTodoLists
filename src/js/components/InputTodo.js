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
        
      }
    }

    return (
      <div style={styles.root}>
        <TextField floatingLabelText="添加新事务"
                   hintText="事务会保存下来，登录后就可以看见"
                   className='addTodoInput'
                   ref={(ref) => this.textField = ref}
                   autoFocus='true' 
                   onKeyDown={this.addTodoKeydown} />
        <RaisedButton primary={true}
                label='添 加'
                onClick={this.addTodoClick} />
      </div>
    )
  }
}   

InputTodo.propTypes = {
  newTodo:PropTypes.func.isRequired
}
