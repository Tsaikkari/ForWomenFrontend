import {
  GET_SERVICES_SUCCESS,
  ServicesActions,
  ServicesState,
} from '../types'

export const services = (
  state: any = {
    services: [],
  //   loading: false,
  //   error: null,
  },
  action: ServicesActions
): ServicesState => {
  switch (action.type) {
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
      }
    default:
      return state
  }
}

export default services
