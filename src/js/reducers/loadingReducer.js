import * as actionTypes from '../constants/ActionTypes'

const initialState = {
    isLoading: false
}


export default function login(state = initialState.isLoading,action){
  switch(action.type){
    case actionTypes.STARTLOADING:
      return true
    case actionTypes.ENDLOADING:
      return false
    default:
      return state
  }
}