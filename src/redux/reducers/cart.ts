import {
  CartState,
  CartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
} from '../types'

export default function service(
  state: CartState = {
    inCart: [],
    address: '',
    postalCode: '',
    city: '',
    country: '',
    paymentMethod: '',
    price: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  },
  action: CartActions
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const { service } = action.payload
      if (state.inCart.find((s) => s.id === service.id)) {
        return state
      }

      return { ...state, inCart: [...state.inCart, service] }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        inCart: state.inCart.filter((s) => s.id !== action.payload.id),
      }
    }

    case SAVE_SHIPPING_ADDRESS: {
      return {
        ...state,
        ...action.payload
      }

    }

    case SAVE_PAYMENT_METHOD: {
      return {
        ...state,
        paymentMethod: action.payload,
      }
    }

    default:
      return state
  }
}