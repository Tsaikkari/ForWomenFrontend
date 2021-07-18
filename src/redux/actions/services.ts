import {
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAIL,
  Service,
  ServiceItem,
} from '../types'

// For admin
// TODO: update and remove service
export const createServiceRequest = (service: ServiceItem) => {
  return {
    type: CREATE_SERVICE_REQUEST,
    payload: {
      service
    }
  }
}

export const createServiceSuccess = (service: Service) => {
  return {
    type: CREATE_SERVICE_SUCCESS,
    payload: {
      service
    }
  }
}
 
export const createServiceFail = (error: any) => {
  return {
    type: CREATE_SERVICE_FAIL,
    payload: {
      error
    }
  }
}


