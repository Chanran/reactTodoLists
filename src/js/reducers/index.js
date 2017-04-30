import React from 'react'
import { combineReducers } from 'redux'

import todoLists from './todoReducer'
import login from './loginReducer'
import isLoading from './loadingReducer'

const todoApp = combineReducers({
  todoLists,
  login,
  isLoading
})

export default todoApp
