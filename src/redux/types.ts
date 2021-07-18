export const REGISTER_CUSTOMER_REQUEST = 'REGISTER_CUSTOMER_REQUEST'
export const REGISTER_CUSTOMER_SUCCESS = 'REGISTER_CUSTOMER_SUCCESS'
export const REGISTER_CUSTOMER_FAIL = 'REGISTER_CUSTOMER_FAIL'
export const CREATE_GROUP_REQUEST = 'CREATE_GROUP_REQUEST'
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS'
export const CREATE_GROUP_FAIL = 'CREATE_GROUP_FAIL'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOADING = 'SET_LOADING'
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_EMPLOYER_FAIL'
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL'
export const UPDATE_GROUP_REQUEST = 'UPDATE_GROUP_REQUEST'
export const UPDATE_GROUP_SUCCESS = 'UPDATE_GROUP_SUCCESS'
export const UPDATE_GROUP_FAIL = 'UPDATE_GROUP_FAIL'
export const SEND_EMAIL_MEMBER_REQUEST = 'SEND_EMAIL_MEMBER_REQUEST'
export const SEND_EMAIL_MEMBER_SUCCESS = 'SEND_EMAIL_MEMBER_SUCCESS'
export const SEND_EMAIL_MEMBER_FAIL = 'SEND_EMAIL_MEMBER_FAIL'
export const SEND_EMAIL_CUSTOMER_REQUEST = 'SEND_EMAIL_CUSTOMER_REQUEST'
export const SEND_EMAIL_CUSTOMER_SUCCESS = 'SEND_EMAIL_CUSTOMER_SUCCESS'
export const SEND_EMAIL_CUSTOMER_FAIL = 'SEND_EMAIL_CUSTOMER_FAIL'
export const CREATE_SERVICE_REQUEST = 'CREATE_SERVICE_REQUEST'
export const CREATE_SERVICE_SUCCESS = 'CREATE_SERVICE_SUCCESS'
export const CREATE_SERVICE_FAIL = 'CREATE_SERVICE_FAIL'
export const GET_SERVICES_REQUEST = 'GET_SERVICES_REQUEST'
export const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS'
export const GET_SERVICES_FAIL = 'GET_SERVICES_FAIL'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS'
export const SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD'
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL'
export const SEND_CONTACT_MAIL_REQUEST = 'SEND_CONTACT_MAIL_REQUEST'
export const SEND_CONTACT_MAIL_SUCCESS = 'SEND_CONTACT_MAIL_SUCCESS'
export const SEND_CONTACT_MAIL_FAIL = 'SEND_CONTACT_MAIL_FAIL'

// TODO: clean up
// Credential 
export type Credential = {
  username: string
  password: string
}

// User
export type User = {
  id: number | null
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  mobile?: string
  image?: string
  role?: string
  isAdmin: boolean
  group: Group
  orders?: any[]
  loading: boolean
  error: any
}

export type UserState = User & {
  isLoggedIn: boolean
}

export type Users = {
  list: any[]
  loading: boolean
  error: any
}

// Customer
export type Customer = {
  username: string
  firstName: string
  lastName: string
  mobile?: string
  image?: string
  role?: string
  isAdmin: boolean
}

// Register customer
export type RegisterCustomerRequestAction = {
  type: typeof REGISTER_CUSTOMER_REQUEST
  payload: {
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
  }
}

export type RegisterCustomerSuccessAction = {
  type: typeof REGISTER_CUSTOMER_SUCCESS
  payload: {
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
  }
}

export type RegisterCustomerFailAction = {
  type: typeof REGISTER_CUSTOMER_FAIL
  payload: {
    error: any
  }
}

// Login 
export type LoginUserRequestAction = {
  type: typeof LOGIN_USER_REQUEST
  payload: {
    credential: {
      username: string
      password: string
    },
    history: any
  }
}

export type LoginUserSuccessAction = {
  type: typeof LOGIN_USER_SUCCESS
  payload: User
}

export type LoginUserFailAction = {
  type: typeof LOGIN_USER_FAIL
  payload: {
    error: any
  }
}

export type LogoutUserAction = {
  type: typeof LOGOUT_USER
}

export type SetLoggedInAction = {
  type: typeof SET_LOGGED_IN
}

export type SetLoadingAction = {
  type: typeof SET_LOADING
}

// Get users
export type GetUsersRequestAction = {
  type: typeof GET_USERS_REQUEST
}

export type GetUsersSuccessAction = {
  type: typeof GET_USERS_SUCCESS
  payload: User
}

export type GetUsersFailAction = {
  type: typeof GET_USERS_FAIL
  payload: {
    error: any
  }
}

// Get user
export type GetUserRequestAction = {
  type: typeof GET_USER_REQUEST
}

export type GetUserSuccessAction = {
  type: typeof GET_USER_SUCCESS
  payload: User
}

export type GetUserFailAction = {
  type: typeof GET_USER_FAIL
  payload: {
    error: any
  }
}

// Update user
export type UserUpdate = {
  username: string
  email: string
  password?: string
  firstName: string
  lastName: string
  mobile?: string
  image?: string
  role?: string
  isAdmin: boolean
  error: any
  success: any
}

export type UpdateUserRequestAction = {
  type: typeof UPDATE_USER_REQUEST
  payload: Partial<UserUpdate>
}

export type UpdateUserSuccessAction = {
  type: typeof UPDATE_USER_SUCCESS
  payload: User
}

export type UpdateUserFailAction = {
  type: typeof UPDATE_USER_FAIL
  payload: {
    error: any
  }
}

export type DeleteUserRequestAction = {
  type: typeof DELETE_USER_REQUEST
  payload: User
}

export type DeleteUserSuccessAction = {
  type: typeof DELETE_USER_SUCCESS
}

export type DeleteUserFailAction = {
  type: typeof DELETE_USER_FAIL
  payload: {
    error: any
  }
}

export type CreateGroupRequestAction = {
  type: typeof CREATE_GROUP_REQUEST
  payload: GroupState
}

export type CreateGroupSuccessAction = {
  type: typeof CREATE_GROUP_SUCCESS
  payload: Group
}

export type CreateGroupFailAction = {
  type: typeof CREATE_GROUP_FAIL
  payload: {
    error: any
  }
}

export type GroupUpdate = {
  id: any
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  mobile?: string
  image?: string
  role?: string
  isAdmin: boolean
  members: any[]
}

export type UpdateGroupRequestAction = {
  type: typeof UPDATE_GROUP_REQUEST
  payload: Partial<GroupUpdate>
}

export type UpdateGroupSuccessAction = {
  type: typeof UPDATE_GROUP_SUCCESS
  payload: Group
}

export type UpdateGroupFailAction = {
  type: typeof UPDATE_GROUP_FAIL
  payload: {
    error: any
  }
}

// emails
export type Email = {
  email: string
  firstName: string
}

export type SendEmailMemberRequestAction = {
  type: typeof SEND_EMAIL_MEMBER_REQUEST
  payload: Email
}

export type SendEmailMemberSuccessAction = {
  type: typeof SEND_EMAIL_MEMBER_SUCCESS
  payload: Email
}

export type SendEmailMemberSuccessFailAction = {
  type: typeof SEND_EMAIL_MEMBER_SUCCESS
  payload: {
    error: any
  }
}

export type SendEmailCustomerRequestAction = {
  type: typeof SEND_EMAIL_CUSTOMER_REQUEST
  payload: Email
}

export type SendEmailCustomerSuccessAction = {
  type: typeof SEND_EMAIL_CUSTOMER_SUCCESS
  payload: Email
}

export type SendEmailCustomerSuccessFailAction = {
  type: typeof SEND_EMAIL_CUSTOMER_SUCCESS
  payload: {
    error: any
  }
}

export type Mail = {
  name: string
  email: string
  text: string
}

export type SendContactMailRequestAction = {
  type: typeof SEND_CONTACT_MAIL_REQUEST
  payload: Mail
}

export type SendContactMailSuccessAction = {
  type: typeof SEND_CONTACT_MAIL_SUCCESS
  payload: Mail
}

export type SendContactMailFailAction = {
  type: typeof SEND_CONTACT_MAIL_FAIL
  payload: {
    error: any
  }
}

export type UserActions =
  | RegisterCustomerRequestAction
  | RegisterCustomerSuccessAction
  | RegisterCustomerFailAction
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | LogoutUserAction
  | SetLoggedInAction
  | SetLoadingAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | UpdateGroupRequestAction
  | UpdateGroupSuccessAction
  | UpdateGroupFailAction
  | DeleteUserRequestAction
  | DeleteUserSuccessAction
  | DeleteUserFailAction
  | CreateGroupRequestAction
  | CreateGroupSuccessAction
  | CreateGroupFailAction
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailAction
  | SendEmailMemberRequestAction
  | SendEmailMemberSuccessAction
  | SendEmailMemberSuccessFailAction
  | SendEmailCustomerRequestAction
  | SendEmailCustomerSuccessAction
  | SendEmailCustomerSuccessFailAction
  | SendContactMailRequestAction
  | SendContactMailSuccessAction
  | SendContactMailFailAction

// Services
export type Service = {
  id: number
  name: string
  description: string
  price: number
}

export type ServiceItem = {
  name: string
  description: string
  price: number
}

export type CreateServiceRequestAction = {
  type: typeof CREATE_SERVICE_REQUEST
  payload: {
    service: Service
  }
}

export type CreateServiceSuccessAction = {
  type: typeof CREATE_SERVICE_SUCCESS
  payload: {
    service: Service
  }
}

export type CreateServiceFailAction = {
  type: typeof CREATE_SERVICE_FAIL
  payload: {
    error: any
  }
}

export type GetServicesRequestAction = {
  type: typeof GET_SERVICES_REQUEST
}

export type GetServicesSuccessAction = {
  type: typeof GET_SERVICES_SUCCESS
  payload: Service[]
}

export type GetServicesFailAction = {
  type: typeof GET_SERVICES_FAIL
  payload: {
    error: any
  }
}

export type ServicesActions =
  | GetServicesRequestAction
  | GetServicesSuccessAction
  | GetServicesFailAction
  | CreateServiceRequestAction
  | CreateServiceSuccessAction
  | CreateServiceFailAction

// Service
export type AddToShoppingCartAction = {
  type: typeof ADD_TO_CART,
  payload: {
    service: Service
  }
}

export type RemoveFromShoppingCartAction = {
  type: typeof REMOVE_FROM_CART,
  payload: {
    id: number
  }
}

// Shipping address
export type SaveShippingAddressAction = {
  type: typeof SAVE_SHIPPING_ADDRESS,
  payload: {
    data: any
  }
}

export type SavePaymentMethodAction = {
  type: typeof SAVE_PAYMENT_METHOD,
  payload: {
    data: any
  }
}

export type CartActions =
  | AddToShoppingCartAction
  | RemoveFromShoppingCartAction
  | SaveShippingAddressAction
  | SavePaymentMethodAction

// Order
export type Order = {
  price: number
  shippingPrice: number
  address: string
  postalCode: string
  city: string
  paymentMethod: any
  taxPrice: number
  totalPrice: number
}

export type Admin = {
  paymentResult: string
  isPaid: boolean
  paidAt: string
  isDelivered: boolean
}

export type OrderActions =
  | CreateOrderRequestAction
  | CreateOrderSuccessAction
  | CreateOrderFailAction

export type CreateOrderRequestAction = {
  type: typeof CREATE_ORDER_REQUEST,
  payload: {
    order: Order
  }
}

export type CreateOrderSuccessAction = {
  type: typeof CREATE_ORDER_SUCCESS,
  payload: {
    order: Order
  }
}

export type CreateOrderFailAction = {
  type: typeof CREATE_ORDER_FAIL,
  payload: {
    error: any
  }
}

// States
export type CredentialState = {
  credential: Credential
}

export type Member = {
  role: string
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  mobile?: string
  image?: string
  isAdmin?: boolean
}

export type Group = {
  id: number | null
  name: string
  members: Member[]
}

export type GroupState = {
  id: number | null
  name: string
  members: Member[]
  success: boolean
}

export type CartState = {
  inCart: any[]
  address: string
  postalCode: string
  city: string
  country: string
  paymentMethod: any
  price: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}

export type ServicesState = {
  list: any[]
  loading: boolean
  error: any
}

export type Resources = {
  services?: Service[]
  loading: boolean
  error: any
}

export type AppState = {
  user: UserState
  users: Users
  cart: CartState
  services: ServicesState
  resources: Resources
  orders: Order[]
}
