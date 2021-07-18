import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { getServicesSuccess, getServicesFail } from '../actions/resources'

function* getServicesSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('/services')
    yield put(getServicesSuccess(res.data.payload))
  } catch (error) {
    yield put(getServicesFail(error))
  }
}

function* saveState() {
  //@ts-ignore
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  takeLatest('GET_SERVICES_REQUEST', getServicesSaga),
  takeLatest('*', saveState)
]

export default sagaWatcher
