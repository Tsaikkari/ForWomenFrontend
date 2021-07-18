import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

import { getUserRequest, updateUserRequest, createGroupRequest } from '../redux/actions/user'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'
import { AppState } from '../redux/types'

const UserForm = () => {
  const user = useSelector((state: AppState) => state.user)
  const group = useSelector((state: AppState) => state.user.group)
  const { error, loading, firstName, isLoggedIn } = user
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const dispatch = useDispatch()

  if (!isLoggedIn) <Redirect to='/login' />

  const history = useHistory()

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login')
    } else {
      if (!user.firstName && user.id !== null) {
        dispatch(getUserRequest(user.id))
      } else {
        // user data from db shown in the form
        setFormData((prevValue: any) => {
          return {
            ...prevValue,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            mobile: user.mobile,
          }
        })
      }
    }
  }, [dispatch, history, user, isLoggedIn])

  useEffect(() => {
    if (!group) {
      dispatch(createGroupRequest(firstName))
    }
  }, [group, dispatch, firstName])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user.password || formData.password !== formData.confirmPassword) {
      setMessage('Salasanat eivät täsmää')
    }
    if (user.password || formData.password === formData.confirmPassword) {
      dispatch(
        updateUserRequest({
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
        })
      )
      setMessage('Successfully saved contact info. Add members next.')
      console.log('message', message)
    }
  }

  return (
    <FormContainer>
      {loading && <Loader />}
      <h1 className='user-form-header'>Contact Information</h1>
      <Form onSubmit={submitHandler} className='user-form'>
        <Form.Group controlId='username-customer'>
          <Form.Label>*Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Email'
            name='username'
            value={formData.username}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='customer-email'>
          <Form.Label>*Repeat Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Repeat Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        {user.role === 'customer' && (
          <>
            <Form.Group controlId='customer-password'>
              <Form.Label>*Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirm-password-customer'>
              <Form.Label>*Repeat Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Repeat Password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
              ></Form.Control>
              <small className="for-example">You can change your password.</small>
            </Form.Group>
          </>
        )}

        <Form.Group as={Row}>
          <Col sm={6}>
            <Form.Label>*First Name</Form.Label>
            <Form.Control
              required
              className='text-field'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
            />
          </Col>

          <Col sm={6}>
            <Form.Label>*Last Name</Form.Label>
            <Form.Control
              className='text-field'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group controlId='customer-mobile-number'>
          <Form.Label>
            *Mobile Phone
          </Form.Label>
          <Form.Control
            required
            className='text-field'
            type='text'
            name='mobileNumber'
            placeholder='Mobile Phone'
            value={formData.mobile}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type='submit' className='save user-form-button'>
          Save
        </Button>
      </Form>
      {error && <Message variant='danger'>{error}</Message>}
      {!error && message && <Message variant='success'>{message}</Message>}
    </FormContainer>
  )
}
export default UserForm