import React from 'react'
import { combineReducers } from 'redux'

import todoLists from './todoReducer'
import login from './loginReducer'
import loading from './loadingReducer'

const todoApp = combineReducers({
  todoLists,
  login,
  loading
})

export default todoApp
