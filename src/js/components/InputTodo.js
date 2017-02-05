import React,{Component,PropTypes} from 'react'

export default class InputTodo extends Component{

  constructor(props,context){
    super(props,context)
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
        <input className='addTodoInput' 
               type='text'
               ref='input'
               autoFocus='true' 
               placeholder='添加新的todo...' 
               onKeyDown={(e) => this.addTodoKeydown(e)} />
        <button className='submitBtn'
                type='button' 
                onClick={(e) => this.addTodoClick(e)}>添加</button>
      </div>
    )
  }
}   

InputTodo.propTypes = {
  newTodo:PropTypes.func.isRequired
}
