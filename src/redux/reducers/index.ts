import { combineReducers } from 'redux'

import user from './user'
import users from './users'
import cart from './cart'
import services from './services'
import resources from './resources'
import orders from './orders'

const rootReducer = () =>
  combineReducers({ user, users, cart, services, resources, orders })

export default rootReducer