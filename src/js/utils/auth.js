import { getStorage, setStorage, removeStorage } from './storage'

export function isAuth() {
  if (getStorage('isAuth')) {
    return true
  }
  return false
}

export function setAuth(name) {
  if (getStorage('isAuth')) {
    return
  }
  return setStorage('isAuth', name)
}

export function logout() {
  if (getStorage('isAuth')) {
    return removeStorage('isAuth')
  }
  return false
}