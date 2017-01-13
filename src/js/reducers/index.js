import React from 'react'
import * as actionTypes from '../constants/ActionTypes'
import * as todoTypes from '../constants/TodoTypes'

const initialState = {
  todoLists:[
    {
      type:todoTypes.UNFINISHTODO,
      text:'this is an unfinish todo'
    },
    {
      type:todoTypes.FINISHEDTODO,
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

export default function reducers(state = initialState,action){
  switch(action.type){
    case actionTypes.NEWTODO:
      return {
        ...state,
        todoLists:[...state.todoLists,{
          type:todoTypes.UNFINISHTODO,
          text:action.text
        }]
      }
    case actionTypes.FINISHTODO:
      state.todoLists[action.index].type = todoTypes.FINISHEDTODO
      return {
        ...state
      }
    case actionTypes.REDOTODO:
      state.todoLists[action.index].type = todoTypes.UNFINISHTODO
      return {
        ...state
      }
    case actionTypes.DELETETODO:
      state.todoLists.slice(action.index,1)
      return {
        ...state
      }
    default:
      return state
  }
}