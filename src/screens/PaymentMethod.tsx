import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

import FormContainer from '../components/FormContainer'
import StepsHeader from '../components/StepsHeader'

import { savePaymentMethod } from '../redux/actions/cart'
import { AppState } from '../redux/types'

const PaymentMethod = () => {
  const cart = useSelector((state: AppState) => state.cart)
  const { address, postalCode, city, country } = cart
  const [paymentMethod, setPaymentMethod] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  if (!address || !postalCode || !city || !country) {
    history.push('/shipping')
  }

  // back button
  const handleClick = () => {
    history.push(`/shipping`)
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <>
      <StepsHeader step1 step2 step3 />
      <FormContainer>
        <h1 className='paymentmethod-header'>Choose Payment Method</h1>
        <Form className='paymentmethod-form' onSubmit={submitHandler}>
          <Form.Group>
            {/* <Form.Label as='legend'>Choose Your Payment Method</Form.Label> */}
            <Col className='paymentmethod-col'>
              <Form.Check
                className='radio-button'
                type='radio'
                label='CreditCard'
                id='CreditCard'
                name='paymentMethod'
                value='CreditCard'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Form.Check
                className='radio-button'
                type='radio'
                label='PayPal'
                id='paypal'
                name='paymentMethod'
                value='paypal'
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Row>
            <Col sm={6}>
              <Button
                type='button'
                className='save paymentmethod-back-button'
                onClick={handleClick}
              >
                Back
              </Button>
            </Col>
            <Col sm={6}>
              <Button type='submit' className='save'>
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </>
  )
}

export default PaymentMethod
