import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  Order,
} from '../types'



export const createOrderRequest = (order: Order) => {
  console.log('order in action request', order)
  return {
    type: CREATE_ORDER_REQUEST, 
    payload: order
  }
}

export const createOrderSuccess = (order: Order) => {
  console.log('order in action success', order)
  return {
    type: CREATE_ORDER_SUCCESS, 
    payload: order
  }
}

export const createOrderFail = (error: any) => {
  return {
    type: CREATE_ORDER_FAIL, 
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message,
    }
  }
}
