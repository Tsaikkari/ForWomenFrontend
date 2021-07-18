import {
  CREATE_ORDER_SUCCESS,
  Order,
  OrderActions,
} from '../types'

export default function service(
  state: any = {
    address: '',
    postalCode: '',
    city: '',
    paymentMethod: '',
    taxPrice: 0,
    totalPrice: 0,
    price: 0,
    shippingPrice: 0,
  },
  action: OrderActions
): Order {
  switch (action.type) {
    case CREATE_ORDER_SUCCESS: {
      console.log('action.payload in order reducer', action.payload)
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}
