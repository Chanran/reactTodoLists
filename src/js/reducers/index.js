import React from 'react'
import * as actionTypes from '../constants/ActionTypes'
import * as todoTypes from '../constants/todoTypes'

const initialState = {
  todoLists:[
    {
      id:1,
      type:todoTypes.UNFINISHTODO,
      text:'this is an unfinish todo'
    },
    {
      id:2,
      type:todoTypes.FINISHEDTODO,
      text:'this is a finished todo'
    },
    {
      id:3,
      type:todoTypes.UNFINISHTODO,
      text:'click to redo this todo'
    },
    {
      id:4,
      type:todoTypes.UNFINISHTODO,
      text:'double click to delete this todo'
    }
  ]
}

function getIndex(array,id){
  for (let i = 0; i < array.length; i++){
    if(array[i].id === id){
      return i;
    }
  }
  return -1;
}

export default function reducers(state = initialState,action){
  switch(action.type){
    case actionTypes.NEWTODO:
      return {
        ...state,
        todoLists:[...state.todoLists,{
          id:state.todoLists[state.todoLists.length-1].id+1,
          type:todoTypes.UNFINISHTODO,
          text:action.text
        }]
      }
    case actionTypes.FINISHTODO:
      let finishIndex = getIndex(state.todoLists,action.id)
      state.todoLists[finishIndex].type = todoTypes.FINISHEDTODO
      return {
        ...state
      }
    case actionTypes.REDOTODO:
      let redoIndex = getIndex(state.todoLists,action.id)
      state.todoLists[redoIndex].type = todoTypes.UNFINISHTODO
      return {
        ...state
      }
    case actionTypes.DELETETODO:
      let deleteIndex = getIndex(state.todoLists,action.id)
      state.todoLists.slice(deleteIndex,1)
      return {
        ...state
      }
    default:
      return state
  }
}