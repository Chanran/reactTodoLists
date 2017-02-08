import React from 'react'
import { combineReducers } from 'redux'

import * as actionTypes from '../constants/ActionTypes'
import * as todoTypes from '../constants/TodoTypes'

const todoListsInitialState = [
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

function todoLists(state = todoListsInitialState,action){
  switch(action.type){
    case actionTypes.NEWTODO:
      return [
          ...state.todoLists,
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

const loginInitialState = {
    username:'',
    password:''
  }


function login(state = loginInitialState,action){
  switch(action.type){
    case actionTypes.CHANGEUSERNAME:
      return Object.assign({},state,{
          username:action.username
        })
    case actionTypes.CHANGEPASSWORD:
      return Object.assign({},state,{
          password:action.password
        })
    default:
      return state
  }
}

const todoApp = combineReducers({
  todoLists,
  login
})

export default todoApp
