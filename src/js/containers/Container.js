import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'
import TodoLists from '../components/TodoLists'
import InputTodo from '../components/InputTodo'

import '../../css/todoLists.css'

export default class Container extends Component{
  constructor(props,context){
    super(props,context)
  }  

  render(){

    const {dispatch} = this.props
    return(
      <div className='todoContainer'>
        <InputTodo onAddClick={text => dispatch(actions.newTodo(text)) } />
        <TodoLists onTodoClick={index => dispatch(actions.finishTodo(index))} />
    </div>
    )
  }
}