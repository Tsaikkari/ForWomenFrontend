import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './saga'
import { AppState } from './types'

export const initState: AppState = {
  user: {
    id: null,
    loading: false,
    error: null,
    role: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobile: '',
    image: '',
    isAdmin: false,
    orders: [],
    group: {
      id: null,
      name: '',
      members: [],
    },
    isLoggedIn: false,
  },
  users: {
    list: [],
    loading: false,
    error: null,
  },
  resources: {
    services: [],
    loading: false,
    error: null,
  },
  services: {
    list: [
      {
        name: '',
        description: '',
        price: 0,
      },
    ],
    loading: false,
    error: null,
  },
  cart: {
    inCart: [],
    price: 0,
    shippingPrice: 0,
    address: '',
    postalCode: '',
    city: '',
    country: '',
    paymentMethod: '',
    taxPrice: 0,
    totalPrice: 0,
  },
  orders: [],
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  let composeEnhancer = compose

  const localState = localStorage.getItem('initState')
  localState && (initialState = JSON.parse(localState))

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer(),
    // @ts-ignore
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ; (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}