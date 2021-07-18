import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { CreateOrderRequestAction } from '../types'
import { createOrderSuccess, createOrderFail } from '../actions/orders'

function* createOrderSaga(action: CreateOrderRequestAction) {
  const order = action.payload

  try {
    console.log('action payload in saga', action.payload)
    //@ts-ignore
    const res = yield axios.post('/user/orders', {
      order,
    })
    console.log('response in saga', res)
    console.log('res.data', res.data)
    yield put(createOrderSuccess(res.data))
  } catch (error) {
    yield put(createOrderFail(error))
  }
}

function* saveState() {
  //@ts-ignore
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  takeLatest('CREATE_ORDER_REQUEST', createOrderSaga),
  takeLatest('*', saveState),
]

export default sagaWatcher
