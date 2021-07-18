import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
    getUsersSuccess,
    getUsersFail,
} from '../actions/users'

function* getUsersSaga() {
    try {
      //@ts-ignore
      const res = yield axios.get('/user/all')
      yield put(getUsersSuccess(res.data.payload))
    } catch (error) {
      yield put(getUsersFail(error))
    }
  }

  const sagaWatcher = [
    takeLatest('GET_USERS_REQUEST', getUsersSaga)
  ]
  
  export default sagaWatcher