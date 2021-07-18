import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'

import {
  updateGroupRequest,
  updateUserRequest,
  sendEmailMemberRequest,
  sendEmailCustomerRequest,
} from '../redux/actions/user'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'
import { AppState } from '../redux/types'

const MemberForm = () => {
  const user = useSelector((state: AppState) => state.user)
  const members = useSelector((state: AppState) => state.user.group?.members)
  const { error, loading, role } = user
  const [qty, setQty] = useState(5)
  const [message, setMessage] = useState('')
  const [firstPassword, setFirstPassword] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    mobile: '',
    role: 'member',
  })

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    if (formData.password === '' && formData.firstName !== '') {
      const password = formData.firstName + '12345678'
      setFirstPassword(password)
    }
  }, [dispatch, formData.password, formData.firstName])

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setQty(7 - members.length)

    if (
      firstPassword &&
      user.group.members?.length < 7 &&
      qty <= 5 &&
      qty >= 1
    ) {
      dispatch(
        updateGroupRequest({
          username: formData.username,
          email: formData.email,
          firstName: formData.firstName,
          mobile: formData.mobile,
          password: firstPassword,
          role: formData.role,
          isAdmin: false,
        })
      )
      setQty(qty - 1)

      if (user.group.members.length === 6) {
        setMessage(
          'Your group is full. The group members will receive an email and they can sign in to their accounts.'
        )
      }
      if (user.group.members.length !== 7 && qty >= 2) {
        setMessage(
          `Member is saved. You can still add ${qty - 1
          } members.`
        )
      }
    }

    if (user.role === 'member') {
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match')
      }
      if (formData.password === formData.confirmPassword) {
        dispatch(
          updateUserRequest({
            username: formData.username,
            firstName: formData.firstName,
            mobile: formData.mobile,
            email: formData.email,
            password: formData.password,
          })
        )
        setMessage('Saved successfully.')
      }
    }
  }

  const handleEmail = () => {
    if (members && members.length <= 7) {
      dispatch(sendEmailMemberRequest(formData.email, formData.firstName))
      setFormData({
        username: '',
        email: '',
        firstName: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        role: 'member',
      })
    }
  }

  const emailAndToOrderInfo = () => {
    dispatch(sendEmailCustomerRequest(user.email, user.firstName))
  }

  return (
    <FormContainer>
      {error && <Message variant='danger'>{error.message}</Message>}
      {!error && message && <Message variant='success'>{message}</Message>}
      {loading && <Loader />}
      <h1 className='member-form-header'>Member Contact Info</h1>
      <Form onSubmit={submitHandler} className='user-form'>
        <Form.Group controlId='member-username'>
          <Form.Label>*Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Email'
            name='username'
            value={formData.username}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='member-email'>
          <Form.Label>*Repeat Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Repeat Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {role === 'member' && (
          <>
            <Form.Group controlId='member-password'>
              <Form.Label>*Change Password</Form.Label>
              <Form.Control
                type='text'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              ></Form.Control>
              <small className='password-length'>At least 11 characters long</small>
            </Form.Group>
            <Form.Group controlId='member-repeat-password'>
              <Form.Label>*Repeat Password</Form.Label>
              <Form.Control
                type='text'
                placeholder='Repeat Password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </>
        )}
        <Form.Group controlId='member-firstname'>
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
        </Form.Group>
        {user.role === 'member' && (
          <>
            <Form.Group controlId='member-mobile'>
              <Form.Label>*Mobile phone</Form.Label>
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
          </>
        )}
        <Row>
          <Col sm={6}>
            <Button className='save member-button' type='submit'>
              1. Save
            </Button>
          </Col>
          {role === 'customer' && (
            <Col sm={6} className='send-member-email-col'>
              <Button
                onClick={handleEmail}
                className='save send-member-email-button'
                type='button'
              >
                2. Send confirmation email
              </Button>
            </Col>
          )}
        </Row>
        {role === 'customer' && (
          <>
            <p>

            </p>
            <Button
              type='button'
              className='tallenna'
              onClick={emailAndToOrderInfo}
            >
              Finished
            </Button>
          </>
        )}
      </Form>
    </FormContainer>
  )
}
export default MemberForm
