import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import { loginUserRequest } from '../redux/actions/user'
import { AppState } from '../redux/types'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector((state: AppState) => state.user)
  const { loading, error, id } = user

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(loginUserRequest(email, password, history))
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <LoginForm
        submitHandler={submitHandler}
        error={error}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        id={id}
      />
    </>
  )
}

export default Login
