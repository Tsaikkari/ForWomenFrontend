import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Container, Button } from 'react-bootstrap'

import { createServiceRequest } from '../redux/actions/services'

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
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

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(createServiceRequest({
      name: formData.name,
      description: formData.description,
      price: formData.price,
    }))
  }

  return (
    <Container className='register-form-container'>
      {/* {error && <Message variant='danger'>{error}</Message>}
          {!error && message && <Message variant='success'>{message}</Message>} */}
      <Form onSubmit={submitHandler} className='service-form'>
        <Form.Group controlId='service-name'>
          <Form.Label>Service</Form.Label>
          <Form.Control
            type='text'
            placeholder='Service name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='service-descriptionFirst'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={3}
            type='text'
            placeholder='Description'
            name='descriptionFirst'
            value={formData.description}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='service-price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='text'
            placeholder='Price'
            name='price'
            value={formData.price}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button className='create-service-button save' type='submit'>
          Save
        </Button>
      </Form>
    </Container>
  )
}

export default ServiceForm
