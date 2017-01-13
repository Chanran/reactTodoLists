import {Component,PropTypes} from 'react'

import todoTypes from '../constants/TodoTypes'

export default class Todo extends Component{
  render(){
    return (
      <li onClick={this.props.onClick} 
          style={{
            textDecoration:this.props.type === todoTypes.FINISHTODO?'line-through':'none',
            cursor:this.props.type === todoTypes.FINISHTODO ?'default':'pointer'
          }}>
          {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick : PropTypes.func.isRequired,
  text : PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired
}