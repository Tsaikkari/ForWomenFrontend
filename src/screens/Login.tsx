import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import StepsHeader from '../components/StepsHeader'
import { loginUserRequest } from '../redux/actions/user'
import { AppState } from '../redux/types'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector((state: AppState) => state.user)
  const selectedServices = useSelector((state: AppState) => state.cart.inCart)
  const { loading, error, id } = user

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(loginUserRequest(username, password, history))
    setUserName('')
    setPassword('')
  }

  return (
    <>
      {/* TODO: fix */}
      {selectedServices.length !== 0 ? (
        <>
          <StepsHeader step1 step2 user={2} payment={1} account={1} />
          <LoginForm
            submitHandler={submitHandler}
            error={error}
            username={username}
            setUserName={setUserName}
            password={password}
            setPassword={setPassword}
            loading={loading}
            id={id}
          />
        </>
      ) : (
        <LoginForm
          submitHandler={submitHandler}
          error={error}
          username={username}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          loading={loading}
          id={id}
        />
      )}
    </>
  )
}

export default Login
