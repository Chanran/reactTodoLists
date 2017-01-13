import {Component,PropTypes} from 'react'

export default class InputTodo extends Component{

  constructor(props,context){
    super(props,context)
    this.handleKeyDown.bind(this)
    this.handleClick.bind(this)
  }

  addTodoKeydown(e){
    if(e.which === 13){
      e.preventDefault()
      const text = this.refs.input.value.trim()
      if(text.length > 0){
        this.props.newTodo(text)
        this.refs.input.value = ''
      }
    }
  }

  addTodoClick(e){
    e.preventDefault()
    const text = this.refs.input.value.trim()
    if(text.length > 0){
      this.props.newTodo(text)
      this.refs.input.value = ''
    }
  }

  render(){
    return (
      <div className='inputContainer'>
        <input className='addTodoInput' type='text' ref='input' autoFocus='true' placeholder='添加新的todo...' onKeyDown={this.addTodoKeydown} />
        <button className='submitBtn' type='button' onClick={this.addTodoClick}>添加</button>
      </div>
    )
  }
} 

InputTodo.propTypes = {
  addTodoClick:PropTypes.func.isRequired,
  addTodoKeydown:PropTypes.func.isRequired
}
