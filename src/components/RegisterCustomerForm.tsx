import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import Message from './Message'
import { registerCustomerRequest } from '../redux/actions/user'
import { AppState } from '../redux/types'

const RegisterCustomerForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('customer')
  const [message, setMessage] = useState('')
  const error = useSelector((state: AppState) => state.user.error)
  const history = useHistory()

  const dispatch = useDispatch()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }
    if (password === confirmPassword) {
      setRole(role)
      dispatch(
        registerCustomerRequest(
          email,
          password,
          firstName,
          lastName,
          role
        )
      )
      history.push('/login')
    }

    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setFirstName('')
    setLastName('')
    setMessage('Registered successfully.')
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  return (
    <Container className='register-form-container'>
      {error && <Message variant='danger'>{error}</Message>}
      {!error && message && <Message className='message' variant='success'>{message}</Message>}
      <Form onSubmit={submitHandler} className='register-form'>
        <h1 className='register-header mb-4 text-center'>Sign Up</h1>
        <Form.Group controlId='email-register'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password-register'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <small className='password-length'>At least 11 characters long.</small>
        </Form.Group>
        <Form.Group controlId='confirm-password-register'>
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            required
            type='password'
            name='confirmPassword'
            placeholder='Repeat Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Col>
          <Col sm={6}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              name='lastName'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>
        <small className='terms-and-conditions'>
          <Link to='conditions' className="conditions">
            Terms and Conditions
          </Link>
        </small><br></br>
        <Button className='register-button save' type='submit'>
          Send
        </Button>
      </Form>
    </Container>
  )
}

export default RegisterCustomerForm
