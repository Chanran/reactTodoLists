import React from 'react'
import { combineReducers } from 'redux'

import * as actionTypes from '../constants/ActionTypes'
import * as todoTypes from '../constants/TodoTypes'

const todoListsInitialState = {
  todoLists:[
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

function todoListsReducer(state = todoListsInitialState,action){
  switch(action.type){
    case actionTypes.NEWTODO:
      return Object.assign({},state,{
        todoLists:[
          ...state.todoLists,
          {
            type:todoTypes.UNFINISHTODO,
            text:action.text
          }
        ]
      })
    case actionTypes.FINISHTODO:
      return Object.assign({},state,{
        todoLists:state.todoLists.map((todo,index) => {
          if(index === action.index){
            return Object.assign({},todo,{
              type:todoTypes.FINISHTODO
            })
          }
          return todo
        })
      })
    case actionTypes.REDOTODO:
      return Object.assign({},state,{
        todoLists:state.todoLists.map((todo,index) => {
          if(index === action.index){
            return Object.assign({},todo,{
              type:todoTypes.UNFINISHTODO
            })
          }
          return todo
        })
      })
    case actionTypes.DELETETODO:
      return Object.assign({},state,{
        todoLists:state.todoLists.filter((todo,index) => {
          if(index === action.index){
            return false
          }
          return true
        })
      })
    default:
      return state
  }
}

const loginInitialState = {
  login:{
    username:'',
    password:''
  }
}

function loginReducer(state = loginInitialState,action){
  switch(action.type){
    case actionTypes.CHANGEUSERNAME:
      return {
        login:Object.assign({},state.login,{
          username:action.username
        })
      }
    case actionTypes.CHANGEPASSWORD:
      return {
        login:Object.assign({},state.password,{
          password:action.password
        })
      }
    default:
      return state
  }
}

const todoApp = combineReducers({
  todoListsReducer,
  loginReducer
})

export default todoApp
