import { getStorage, setStorage } from './storage'

export function isAuth() {
  if (getStorage('isAuth')) {
    return true
  }
  return false
}

export function setAuth(name) {
  if (getStorage('isAuth')) {
    return;
  }
  setStorage('isAuth', name)
}