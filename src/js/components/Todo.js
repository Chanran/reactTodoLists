import React,{Component,PropTypes} from 'react'

import * as todoTypes from '../constants/TodoTypes'

export default class Todo extends Component{

  handleFinishTodo(e){
    e.preventDefault()
    if(this.props.type === todoTypes.UNFINISHTODO){
      this.props.finishTodo(this.props.index)
    }else if (this.props.type === todoTypes.FINISHTODO){
      this.props.redoTodo(this.props.index)
    }
  }

  render(){

    const styles={
      li: {
        textDecoration:this.props.type === todoTypes.FINISHTODO?'line-through':'none',
        cursor:'pointer',
      }
    }

    return (
      <li onClick={(e) => this.handleFinishTodo(e,this)}
          style={styles.li}>
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