import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import axios from 'axios'

import App from './App'
import makeStore from './redux/store'
import LocalStorage from './local-storage'
axios.defaults.baseURL = 'http://localhost:5000/'

const store = makeStore()

axios.interceptors.request.use((config: any) => {
  const token = LocalStorage.getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
)
