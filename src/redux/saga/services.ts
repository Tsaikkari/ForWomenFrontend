import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { createServiceSuccess, createServiceFail } from '../actions/services'
import { CreateServiceRequestAction } from '../types'

// for admin 
function* createServiceSaga(action: CreateServiceRequestAction) {
  const { service } = action.payload
 
  try {
    //@ts-ignore
    const res = yield axios.post('/services', service)
    yield put(createServiceSuccess(res)) 
  } catch (error) {
    yield put(createServiceFail(error))
  }
}

function* saveState() {
  //@ts-ignore
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  takeLatest('CREATE_SERVICE_REQUEST', createServiceSaga),
  takeLatest('*', saveState)
]

export default sagaWatcher
