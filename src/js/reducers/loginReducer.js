import * as actionTypes from '../constants/ActionTypes'

const initialState = {
  login: {
    username: '',
    password: ''
  }
}

export default function login(state = initialState.login, action){
  switch(action.type){
    case actionTypes.CHANGEUSERNAME:
      return Object.assign({}, state, {
          username: action.username
        })
    case actionTypes.CHANGEPASSWORD:
      return Object.assign({}, state, {
          password: action.password
        })
    default:
      return state
  }
}