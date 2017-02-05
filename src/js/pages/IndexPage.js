import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar'

import * as actions from '../actions'
import TodoLists from '../components/TodoLists'
import InputTodo from '../components/InputTodo'

import '../../css/todoLists.css'

class IndexPage extends Component{
  constructor(props,context){
    super(props,context)
  }  

  render(){
    const {dispatch,todoLists} = this.props
    return(
      <div className='todoContainer'>
        <InputTodo newTodo={text => dispatch(actions.newTodo(text)) } />
        <TodoLists finishTodo={index => dispatch(actions.finishTodo(index))} 
                   redoTodo={index => dispatch(actions.redoTodo(index))}
                   todoLists={todoLists} />
    </div>
    )
  }
}

IndexPage.propTypes = {
  todoLists:PropTypes.arrayOf(PropTypes.shape({
    type:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
  }).isRequired).isRequired,
}

function select(state){
  return {
    todoLists:state.todoLists
  }
}

export default connect(select)(IndexPage)