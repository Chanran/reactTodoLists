import * as types from '../constants/ActionTypes'

/**
 * 开始loading
 */
export function startLoading() {
  return {
    type: types.STARTLOADING
  }
}

/**
 * 结束loading
 */
export function endLoading() {
  return {
    type: types.ENDLOADING
  }
}