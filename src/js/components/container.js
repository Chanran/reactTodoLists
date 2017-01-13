import React,{Component} from 'react'
import TodoLists from './TodoLists'
import InputTodo from './InputTodo'

import '../../css/todoLists.css'

export default class TodoLists extends Component{
  constructor(props,context){
    super(props,context)
  }

  

  render(){
    <div className='todoContainer'>
      <InputTodo />
      <TodoLists />
    </div>
  }
}