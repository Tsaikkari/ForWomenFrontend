import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Container } from 'react-bootstrap'

import Message from '../components/Message'
import { sendContactMailRequest } from '../redux/actions/user'
import { AppState } from '../redux/types'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const error = useSelector((state: AppState) => state.user.error)

  const dispatch = useDispatch()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(sendContactMailRequest(name, email, text))
    setName('')
    setEmail('')
    setText('')
    setMessage('Message sent successfully')
  }

  return (
    <Container className='contact-container justify-content-md-center'>
      {!error && <Message variant="success">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      <Form onSubmit={submitHandler} className='contact-form'>
        <Form.Group controlId='contact-name'>
          <Form.Label className='label-name'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='contact-email'>
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='contact-text'>
          <Form.Label>Write a message</Form.Label>
          <Form.Control
            className='textarea'
            as='textarea'
            name='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />
        </Form.Group>
        <Button type='submit' className='contact-button save'>
          Send
        </Button>
      </Form>
    </Container>
  )
}

export default ContactForm
