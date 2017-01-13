import * as types from './constants/ActionTypes'

export function newTodo(text){
  return {
    type:types.NEWTODO,
    text
  }
}

export function finishTodo(index){
  return {
    type:types.FINISHTODO,
    index
  }
}

export function redoTodo(index){
  return {
    type:types.REDOTODO,
    index
  }
}

export function deleteTodo(index){
  return {
    type:types.DELETETODO,
    index
  }
}