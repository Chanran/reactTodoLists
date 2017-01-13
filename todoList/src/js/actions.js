import * as types from './constants/ActionTypes'

export function newTodo(text){
  return {
    type:types.NEWTODO,
    text
  }
}

export function finishTodo(id){
  return {
    type:types.FINISHTODO,
    id
  }
}

export function redoTodo(id){
  return {
    type:types.REDOTODO,
    id
  }
}

export function deleteTodo(id){
  return {
    type:types.DELETETODO,
    id
  }
}