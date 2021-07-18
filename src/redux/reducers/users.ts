import { GET_USERS_SUCCESS, UserActions, Users } from '../types'

export const users = (
  state: any = {
    list: [],
  },
  action: UserActions
): Users => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default users
