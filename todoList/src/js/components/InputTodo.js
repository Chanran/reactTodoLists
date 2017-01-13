import {Component} from 'react'

export default class InputTodo extends Component{

  constructor(props,context){
    super(props,context)
    this.handleClick.bind(this)
  }

  handleKeyDown(e){
    if(e.which === 13){
      e.preventDefault()
      const text = this.refs.input.value.trim()
      if(text.length > 0){
        this.props.newTodo(text)
        this.refs.input.value = ''
      }
    }
  }

  handleClick(e){
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
        <input className='addTodoInput' type='text' ref='input' autoFocus='true' placeholder='添加新的todo...' onKeyDown={this.handleKeyDown} />
        <button className='submitBtn' type='button' onClick={this.handleClick}>添加</button>
      </div>
    )
  }
} 
