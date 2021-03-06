import { hashHistory } from 'react-router'

import * as types from '../constants/ActionTypes'
import { startLoading, endLoading } from '../actions/loadingActions'
import { setAuth } from '../utils/auth'

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

        // 登录成功跳转
        if (parseInt(data.code) === 200) {
          console.log(data)
          // 设置用户名称
          setAuth(data.token)
          // 跳转到todoLists 
          hashHistory.push('/index')
        } else if (parseInt(data.code) === 300) {
          alert(data.msg)
        }
        console.log(data)
        
        // 结束loading
        dispatch(endLoading());

      })
      .catch(err => {

        // 结束loading
        dispatch(endLoading());

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
