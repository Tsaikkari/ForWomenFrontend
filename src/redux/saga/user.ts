import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'
import {
  RegisterCustomerRequestAction,
  LoginUserRequestAction,
  UpdateUserRequestAction,
  DeleteUserRequestAction,
  UpdateGroupRequestAction,
  CreateGroupRequestAction,
  SendEmailMemberRequestAction,
  SendEmailCustomerRequestAction,
  SendContactMailRequestAction,
  AppState,
} from './../types'
import {
  registerCustomerSuccess,
  registerCustomerFail,
  loginUserSuccess,
  loginUserFail,
  setLoggedIn,
  getUserSuccess,
  getUserFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail,
  updateGroupSuccess,
  updateGroupFail,
  createGroupSuccess,
  createGroupFail,
  sendEmailMemberSuccess,
  sendEmailMemberFail,
  sendEmailCustomerSuccess,
  sendEmailCustomerFail,
  sendContactMailSuccess,
  sendContactMailFail,
} from '../actions/user'

const groupId = (state: AppState) => state.user.group.id

function* registerCustomerSaga(action: RegisterCustomerRequestAction) {
  const { email, password, firstName, lastName, role } = action.payload

  try {
    //@ts-ignore
    const res = yield axios.post('/user/root', {
      email,
      password,
      firstName,
      lastName,
      role,
    })
    yield put(registerCustomerSuccess(res.data))
  } catch (error) {
    yield put(registerCustomerFail(error))
  }
}

function* loginUserSaga(action: LoginUserRequestAction) {
  const email = action.payload.credential.email
  const password = action.payload.credential.password
  const history = action.payload.history

  try {
    //@ts-ignore
    const res = yield axios.post('/login', {
      email,
      password,
    })

    if (res.data.status === 200) {
      yield put(loginUserSuccess(res.data.payload))
      yield LocalStorage.saveToken(res.data.payload.token)
      yield put(setLoggedIn())
      if (res.data.payload.mobileNumber === null) {
        history.push('/shipping')
      } else {
        history.push('/user')
      }
    }
  } catch (error) {
    yield put(loginUserFail(error))
  }
}

function* getUserSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('/user')
    yield put(getUserSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserFail(error))
  }
}

function* updateUserSaga(action: UpdateUserRequestAction) {
  const userInfo = action.payload
  try {
    //@ts-ignore
    const res = yield axios.patch('/user/', userInfo)
    yield put(updateUserSuccess(res.data.payload))
  } catch (error) {
    yield put(updateUserFail(error))
  }
}

function* deleteUserSaga(action: DeleteUserRequestAction) {
  const userId = action.payload
  try {
    //@ts-ignore
    const res = yield axios.delete(`/user/${userId}`)
    if (res.status === 200) {
      yield put(deleteUserSuccess())
    }
  } catch (error) {
    yield put(deleteUserFail(error))
  }
}

function* createGroupSaga(action: CreateGroupRequestAction) {
  const group = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('/user/group', group)
    yield put(createGroupSuccess(res.data.payload))
  } catch (error) {
    yield put(createGroupFail(error))
  }
}

// Add new group member
function* updateGroupSaga(action: UpdateGroupRequestAction) {
  const member = action.payload

  try {
    //@ts-ignore
    const id = yield select(groupId)
    //@ts-ignore
    const res = yield axios.patch(`/user/group/${id}`, member)
    yield put(updateGroupSuccess(res.data.payload))
  } catch (error) {
    yield put(updateGroupFail(error))
  }
}

// Send mail to a member
function* sendEmailMemberSaga(action: SendEmailMemberRequestAction) {
  const email = action.payload.email
  const name = action.payload.firstName
  try {
    //@ts-ignore
    const res = yield axios.post('/email/member', { email, name })
    yield put(sendEmailMemberSuccess(res.data))
  } catch (error) {
    yield put(sendEmailMemberFail(error))
  }
}

// Send mail to a customer
function* sendEmailCustomerSaga(action: SendEmailCustomerRequestAction) {
  const email = action.payload.email
  const name = action.payload.firstName
  try {
    //@ts-ignore
    const res = yield axios.post('/email/customer', { email, name })
    yield put(sendEmailCustomerSuccess(res.data))
  } catch (error) {
    yield put(sendEmailCustomerFail(error))
  }
}

// Contact mail 
function* sendContactMailSaga(action: SendContactMailRequestAction) {
  const { email, name, text } = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('/email/contact', { email, name, text })
    console.log('resdatainsaga', res.data)
    yield put(sendContactMailSuccess(res.data))
  } catch (error) {
    yield put(sendContactMailFail(error))
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_CUSTOMER_REQUEST', registerCustomerSaga),
  takeLatest('LOGIN_USER_REQUEST', loginUserSaga),
  takeLatest('GET_USER_REQUEST', getUserSaga),
  takeLatest('UPDATE_USER_REQUEST', updateUserSaga),
  takeLatest('CREATE_GROUP_REQUEST', createGroupSaga),
  takeLatest('UPDATE_GROUP_REQUEST', updateGroupSaga),
  takeLatest('DELETE_USER_REQUEST', deleteUserSaga),
  takeLatest('SEND_EMAIL_MEMBER_REQUEST', sendEmailMemberSaga),
  takeLatest('SEND_EMAIL_CUSTOMER_REQUEST', sendEmailCustomerSaga),
  takeLatest('SEND_CONTACT_MAIL_REQUEST', sendContactMailSaga),
]

export default sagaWatcher
