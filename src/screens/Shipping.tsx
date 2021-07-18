import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import FormContainer from '../components/FormContainer'
import StepsHeader from '../components/StepsHeader'

import { saveShippingAddress } from '../redux/actions/cart'
import { AppState } from '../redux/types'

const ShippingScreen = () => {
  const cart = useSelector((state: AppState) => state.cart)
  const [address, setAddress] = useState(cart.address)
  const [postalCode, setPostalCode] = useState(cart.postalCode)
  const [city, setCity] = useState(cart.city)
  const [country, setCountry] = useState(cart.country)
  const [freeTierCode, setFreeTierCode] = useState('')
  const [isFree, setIsFree] = useState(false)

  const history = useHistory()
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFreeTierCode((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })

    if (value === 'lahja') {
      setIsFree(true)
      document.querySelector('#contact-info')?.classList.add('invisible')
    }
  }

  const freeTierHandler = (e: React.FormEvent) => {
    if (isFree === true) {
      setFreeTierCode(freeTierCode)
      history.push('/user')
    }
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(saveShippingAddress({ address, postalCode, city, country }))
    history.push('/paymentmethod')
  }

  return (
    <>
      <StepsHeader step1 step2 step3 user={2} payment={1} account={1} />
      <FormContainer>
        <h1 className='shipping-header'>Contact Information</h1>
        <Form className='shipping-form' onSubmit={submitHandler}>
          <Form.Group controlId='free-tier-code'>
            <Form.Label>Free tier code?</Form.Label>
            <Form.Control
              type='text'
              placeholder='Code'
              name='isFree'
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='free-tier-button'>
            <Button type='button' onClick={freeTierHandler} className='free-tier-button save'>
              Next
            </Button>
          </Form.Group>
          <div id='contact-info'>
            <Form.Group controlId='address'>
              <Form.Label>*Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Address'
                name='address'
                onChange={(e) => setAddress(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='postal-code'>
              <Form.Label>*Postal Code</Form.Label>
              <Form.Control
                type='text'
                placeholder='Postal Code'
                name='postalCode'
                onChange={(e) => setPostalCode(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
              <Form.Label>*City</Form.Label>
              <Form.Control
                type='text'
                placeholder='City'
                name='city'
                onChange={(e) => setCity(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='country'>
              <Form.Label>*Country</Form.Label>
              <Form.Control
                type='text'
                placeholder='Country'
                name='country'
                onChange={(e) => setCountry(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button type='submit' className='save'>
              Next
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen