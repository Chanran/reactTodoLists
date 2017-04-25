import * as types from '../constants/ActionTypes'
import { startLoading, endLoading } from '../actions/loadingActions'

export function login(username, password){
  let postData = {
    username,
    password
  }
  console.log(postData);

  return dispatch => {

    // 异步请求，开始loading
    dispatch(startLoading());
    
    return fetch('/login', {
        method: 'post',
        headers: {
          'Content-Type':'application/json'  
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(postData)
      })
      .then((res) => {
        return res.json()
      })
      .then((data) => {

        console.log(data)
        
        // 结束loading
        dispatch(endLoading());

      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function changeUsername(username){
  return {
    type:types.CHANGEUSERNAME,
    username
  }
}

export function changePassword(password){
  return {
    type:types.CHANGEPASSWORD,
    password
  }
}
