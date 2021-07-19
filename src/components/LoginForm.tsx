import { Link } from 'react-router-dom'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

import Message from './Message'
import Loader from './Loader'

const LoginForm = ({
  email, 
  setEmail,
  password,
  setPassword,
  error,
  loading,
  submitHandler,
}: any) => {
  return (
    <>
      <Container className='login-container'>
        <Row className='justify-content-md-right login-row'>
          <Col md={{ span: 6, offset: 6 }} className='login-col'>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className='login-form'>
              <h1 className='signin'>Login</h1>
              <Form.Group controlId='login-email'>
                <Form.Label className='label'>Email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='login-password'>
                <Form.Label className='label'>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' className='login-button save'>
                Login
              </Button>
              <Row className='forgot-password py-3'>
                <Col className='forgot-password'>
                  <Link className='forgot-password' to='/password/recover'>
                    Forgot password?
                  </Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginForm
