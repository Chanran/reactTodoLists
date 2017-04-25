import * as actionTypes from '../constants/ActionTypes'
import * as todoTypes from '../constants/TodoTypes'

const initialState = {
  todoLists: [
    {
      type:todoTypes.UNFINISHTODO,
      text:'this is an unfinish todo'
    },
    {
      type:todoTypes.FINISHTODO,
      text:'this is a finished todo'
    },
    {
      type:todoTypes.UNFINISHTODO,
      text:'click to redo this todo'
    },
    {
      type:todoTypes.UNFINISHTODO,
      text:'double click to delete this todo'
    }
  ]
}

export default function todoLists(state = initialState.todoLists, action){
  switch(action.type){
    case actionTypes.NEWTODO:
      return [
          ...state,
          {
            type:todoTypes.UNFINISHTODO,
            text:action.text
          }
        ]
    case actionTypes.FINISHTODO:
      return state.map((todo,index) => {
          if(index === action.index){
            return Object.assign({},todo,{
              type:todoTypes.FINISHTODO
            })
          }
          return todo
        })
    case actionTypes.REDOTODO:
      return state.map((todo,index) => {
          if(index === action.index){
            return Object.assign({},todo,{
              type:todoTypes.UNFINISHTODO
            })
          }
          return todo
        })
    case actionTypes.DELETETODO:
      return state.filter((todo,index) => {
          if(index === action.index){
            return false
          }
          return true
        })
    default:
      return state
  }
}