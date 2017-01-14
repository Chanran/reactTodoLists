import React,{Component,PropTypes} from 'react'

import * as todoTypes from '../constants/TodoTypes'

export default class Todo extends Component{

  handleFinishTodo(e){
    e.preventDefault()
    const index = e.target.key
    console.log(index)
    if(this.props.type === todoTypes.UNFINISHTODO){
      this.props.finishTodo(index)
    }else if (this.props.type === todoTypes.FINISHTODO){
      this.props.redoTodo(index)
    }
  }

  render(){
    return (
      <li onClick={(e) => this.handleFinishTodo(e)}>
          {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  finishTodo:PropTypes.func.isRequired,
  redoTodo:PropTypes.func.isRequired,
  text:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired
}