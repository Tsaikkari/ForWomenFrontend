import {
  ServicesActions,
  ServicesState,
  CREATE_SERVICE_SUCCESS,
} from '../types'

export const services = (
  state: any = {
    list: [],
    loading: false,
    error: null,
  },
  action: ServicesActions
): ServicesState => {
  switch (action.type) {
    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false, 
        service: action.payload
      }
    default:
      return state
  }
}

export default services
