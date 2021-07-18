import {
  REGISTER_CUSTOMER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_GROUP_SUCCESS,
  CREATE_GROUP_SUCCESS,
  SEND_EMAIL_MEMBER_SUCCESS,
  SEND_EMAIL_CUSTOMER_SUCCESS,
  SEND_CONTACT_MAIL_SUCCESS,
  UserActions,
  UserState,
} from '../types'

const initState: UserState = {
  id: null,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  loading: false,
  error: null,
  group: {
    id: null,
    name: '',
    members: [],
  },
  orders: [],
  isLoggedIn: false,
  mobile: '',
  isAdmin: false,
}

const user = (state = initState, action: UserActions): UserState => {
  switch (action.type) {
    case REGISTER_CUSTOMER_SUCCESS:
      console.log('register-data', action.payload)
      return { ...state, ...action.payload }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      }
    case LOGOUT_USER:
      return initState
    case GET_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case UPDATE_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case DELETE_USER_SUCCESS:
      return { ...state, loading: false }
    case CREATE_GROUP_SUCCESS:
      return { ...state, group: action.payload, loading: false }
    case UPDATE_GROUP_SUCCESS:
      return { ...state, group: action.payload, loading: false }
    case SEND_EMAIL_MEMBER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case SEND_EMAIL_CUSTOMER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case SEND_CONTACT_MAIL_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    default:
      return state
  }
}

export default user