import {
  REGISTER_CUSTOMER_REQUEST,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  SET_LOGGED_IN,
  SET_LOADING,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_GROUP_REQUEST,
  UPDATE_GROUP_SUCCESS,
  UPDATE_GROUP_FAIL,
  CREATE_GROUP_REQUEST,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL,
  SEND_EMAIL_MEMBER_REQUEST,
  SEND_EMAIL_MEMBER_SUCCESS,
  SEND_EMAIL_MEMBER_FAIL,
  SEND_EMAIL_CUSTOMER_REQUEST,
  SEND_EMAIL_CUSTOMER_SUCCESS,
  SEND_EMAIL_CUSTOMER_FAIL,
  SEND_CONTACT_MAIL_REQUEST,
  SEND_CONTACT_MAIL_SUCCESS,
  SEND_CONTACT_MAIL_FAIL,
  UserState,
  UserUpdate,
  GroupState,
  GroupUpdate,
  Email,
  Mail,
  DeleteUserRequestAction,
} from '../types'

export const registerCustomerRequest = (
  username: string,
  email: string, 
  password: string,
  firstName: string,
  lastName: string,
  role: string,
) => {
  return {
    type: REGISTER_CUSTOMER_REQUEST,
    payload: { username, email, password, firstName, lastName, role },
  }
}

export const registerCustomerSuccess = (userInfo: UserState) => {
  return {
    type: REGISTER_CUSTOMER_SUCCESS,
    payload: userInfo,
  }
}

export const registerCustomerFail = (error: any) => {
  return {
    type: REGISTER_CUSTOMER_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const loginUserRequest = (username: string, password: string, history: any) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      credential: {
        username,
        password,
      },
      history,
    },
  }
}

export const loginUserSuccess = (userInfo: Credential) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userInfo,
  }
}

export const loginUserFail = (error: any) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const setLoggedIn = () => {
  return {
    type: SET_LOGGED_IN,
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const getUserRequest = (id: number) => {
  return {
    type: GET_USER_REQUEST,
    payload: id,
  }
}

export const getUserSuccess = (info: any) => {
  return {
    type: GET_USER_SUCCESS,
    payload: info,
  }
}

export const getUserFail = (error: any) => {
  return {
    type: GET_USER_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const updateUserRequest = (user: Partial<UserUpdate>) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user,
  }
}

export const updateUserSuccess = (user: UserUpdate) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  }
}

export const updateUserFail = (error: any) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const deleteUserRequest = (id: DeleteUserRequestAction) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: id
  }
}

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  }
}

export const deleteUserFail = (error: any) => {
  return {
    type: DELETE_USER_FAIL,
    payload: error,
  }
}

export const createGroupRequest = (name: any) => {
  return {
    type: CREATE_GROUP_REQUEST,
    payload: name,
  }
}

export const createGroupSuccess = (group: GroupState) => {
  return {
    type: CREATE_GROUP_SUCCESS,
    payload: group
  }
}

export const createGroupFail = (error: any) => {
  return {
    type: CREATE_GROUP_FAIL,
    payload: error
  }
}

export const updateGroupRequest = (
  group: Partial<GroupUpdate>
) => {
  return {
    type: UPDATE_GROUP_REQUEST,
    payload: group,
  }
}

export const updateGroupSuccess = (group: GroupUpdate) => {
  return {
    type: UPDATE_GROUP_SUCCESS,
    payload: group
  }
}

export const updateGroupFail = (error: any) => {
  return {
    type: UPDATE_GROUP_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const sendEmailMemberRequest = (email: any, firstName: string) => {
  return {
    type: SEND_EMAIL_MEMBER_REQUEST,
    payload: {
      email, 
      firstName,
    }
  }
}

export const sendEmailMemberSuccess = (data: Email) => {
  return {
    type: SEND_EMAIL_MEMBER_SUCCESS,
    payload: data,
  }
}

export const sendEmailMemberFail = (error: any) => {
  return {
    type: SEND_EMAIL_MEMBER_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const sendEmailCustomerRequest = (email: any, firstName: string) => {
  return {
    type: SEND_EMAIL_CUSTOMER_REQUEST,
    payload: {
      email, 
      firstName,
    }
  }
}

export const sendEmailCustomerSuccess = (data: Email) => {
  return {
    type: SEND_EMAIL_CUSTOMER_SUCCESS,
    payload: data,
  }
}

export const sendEmailCustomerFail = (error: any) => {
  return {
    type: SEND_EMAIL_CUSTOMER_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}

export const sendContactMailRequest = (email: string, name: string, text: string) => {
  return {
    type: SEND_CONTACT_MAIL_REQUEST,
    payload: {
      email, 
      name,
      text,
    }
  }
}

export const sendContactMailSuccess = (data: Mail) => {
  return {
    type: SEND_CONTACT_MAIL_SUCCESS,
    payload: data,
  }
}

export const sendContactMailFail = (error: any) => {
  return {
    type: SEND_CONTACT_MAIL_FAIL,
    payload: {
      error: error.response && error.response.data.message ?
      error.response.data.message :
      error.message
    }
  }
}