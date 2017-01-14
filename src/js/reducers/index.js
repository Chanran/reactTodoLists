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
      return Object.assign({},state,{
        todoLists:[
          ...state.todos,
          {
            type:todoTypes.UNFINISHTODO,
            text:action.text
          }
        ]
      })
    case actionTypes.FINISHTODO:
      return Object.assign({},state,{
        todos:state.todos.map((todo,index) => {
          if(index === action.index){
            return Object.assign({},todo,{
              type:todoTypes.FINISHEDTODO
            })
          }
        })
      })
    case actionTypes.REDOTODO:
      return Object.assign({},state,{
        todos:state.todos.map((todo,index) => {
          if(index === action.index){
            return Object.assign({},todo,{
              type:todoTypes.UNFINISHTODO
            })
          }
        })
      })
    case actionTypes.DELETETODO:
      return Object.assign({},state,{
        todos:state.todos.filter((todo,index) => {
          if(index === action.index){
            return false
          }
        })
      })
    default:
      return state
  }
}