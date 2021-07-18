import {
GET_USERS_REQUEST, 
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  User, 
} from '../types'

export const getUsersRequest = () => {
    return {
      type: GET_USERS_REQUEST
    }
  }
  
  export const getUsersSuccess = (list: User[]) => {
    return {
      type: GET_USERS_SUCCESS,
      payload: list
    }
  }
  
  export const getUsersFail = (error: any) => {
    return {
      type: GET_USERS_FAIL,
      payload: {
        error: error.response && error.response.data.message ?
        error.response.data.message :
        error.message
      }
    }
  }

