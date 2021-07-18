import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  Service,
} from '../types'


export const addToShoppingcart = (service: Service) => {
  return {
    type: ADD_TO_CART,
    payload: {
      service,
    }
  }
}

export const removeFromShoppingcart = (id: number) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    }
  }
}

export const saveShippingAddress = (data: any) => {
  return {
    type: SAVE_SHIPPING_ADDRESS,
    payload: data,
  }
}

export const savePaymentMethod = (data: any) => {
  return {
    type: SAVE_PAYMENT_METHOD, 
    payload: data,
  }
}

