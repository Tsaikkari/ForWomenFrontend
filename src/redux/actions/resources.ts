import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAIL,
  Service,
} from '../types'

export const getServicesRequest = () => {
  return {
    type: GET_SERVICES_REQUEST,
  }
}

export const getServicesSuccess = (services: Service[]) => {
  return {
    type: GET_SERVICES_SUCCESS,
    payload: services
  }
}

export const getServicesFail = (error: any) => {
  return {
    type: GET_SERVICES_FAIL,
    payload: {
      error
    }
  }
}




