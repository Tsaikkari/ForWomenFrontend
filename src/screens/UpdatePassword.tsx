import { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

import FormContainer from '../components/FormContainer'
const SERVER_URI = 'localhost:5000'

class UpdatePassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    submitted: false,
  }

  handleChange = (key: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [key]: e.target.value })
  }

  updatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    //@ts-ignore
    const { userId, token } = this.props
    const { password } = this.state
    axios
      .post(`${SERVER_URI}/reset-password/new-password/${userId}/${token}`, {
        password,
      })
      .then((res) => console.log('RESPONSE FROM SERVER TO CLIENT:', res))
      .catch((err) => console.log('SERVER ERROR TO CLIENT:', err))
    this.setState({ submitted: !this.state.submitted })
  }
  render() {
    const { submitted } = this.state
    return (
      <FormContainer>
        <h3 style={{ paddingBottom: '1.25rem', paddingTop: '2rem' }}>
          Change Password
        </h3>
        {submitted ? (
          <div className='reset-password-form'>
            <p>Your password has been changed.</p>
            <Link to='/login' className='save'>
              Login
            </Link>
          </div>
        ) : (
          <div className='reset-password-form'>
            <Form
              onSubmit={this.updatePassword}
              style={{ paddingBottom: '1.5rem' }}
            >
              <Form.Label htmlFor='password' className='form-label'>
                New Password
              </Form.Label>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange('password')}
                  value={this.state.password}
                  placeholder='New Password'
                  type='password'
                />
              </Form.Group>
              <Form.Label htmlFor='password' className='form-label'>
                Repeat Password
              </Form.Label>
              <Form.Group>
                <Form.Control
                  required
                  onChange={this.handleChange('confirmPassword')}
                  value={this.state.confirmPassword}
                  placeholder='Repeat Password'
                  type='password'
                />
              </Form.Group>
              <Button
                type='submit'
                className='btn-primary password-reset-btn save'
              >
                Save
              </Button>
            </Form>
          </div>
        )}
      </FormContainer>
    )
  }
}

//@ts-ignore
UpdatePassword.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}

export default UpdatePassword
