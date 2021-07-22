//import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Row, Col, Card, ListGroup, Container } from 'react-bootstrap'

import Message from '../components/Message'
import StepsHeader from '../components/StepsHeader'

import { createOrderRequest } from '../redux/actions/orders'
import { AppState } from '../redux/types'

const PlaceOrder = () => {
  const cart = useSelector((state: AppState) => state.cart)

  const dispatch = useDispatch()
  const history = useHistory()

  // useEffect(() => {
  //   if (success) {
  //     history.push(`/order/${id}`)
  //   }
  // }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrderRequest({
        address: cart.address,
        postalCode: cart.postalCode,
        city: cart.city,
        country: cart.country,
        paymentMethod: cart.paymentMethod,
        price: cart.price,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  // back button
  const handleClick = () => {
    history.push(`/paymentmethod`)
  }

  //@ts-ignore
  cart.price = cart.inCart.reduce(
    (acc: number, item: any) => acc + item.price,
    0
  )
  //@ts-ignore
  cart.shippingPrice = cart.price > 200 ? 0 : 20
  cart.totalPrice = Number(cart.price) + Number(cart.shippingPrice)

  return (
    <>
      <StepsHeader step1 step2 step3 step4 />
      <h1 className='placeorder-header text-center'>Summary</h1>
      <Container>
        <Row>
          <Col md={8} className='order-info-col'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2 className='placeorder-headers'>Shipping Address</h2>
                <p className='placeorder-texts'>
                  Address: {cart.address}, {cart.postalCode}, {cart.city},{' '}
                  {cart.country}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2 className='placeorder-headers'>Payment</h2>
                <p className='placeorder-texts'>
                  Payment Method: {cart.paymentMethod}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2 className='placeorder-headers'>Service</h2>
                {cart.inCart.length === 0 ? (
                  <Message>Your shopping cart is empty</Message>
                ) : (
                  <ListGroup variant='flush'>
                    {cart.inCart.map((item: any, index) => (
                      <ListGroup.Item key={index} className='selected-item'>
                        <Col md={6}>
                          <p className='placeorder-texts selected-product'>
                            {item.name}
                          </p>
                        </Col>
                        <Col md={6}>
                          <p className='placeorder-texts selected-product'>
                            {item.price} €
                          </p>
                        </Col>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
              <Button
                type='button'
                className='placeorder-back-button'
                onClick={handleClick}
              >
                BACK
              </Button>
            </ListGroup>
          </Col>
          <Col md={4} className='order-summary-col'>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2 className='placeorder-headers'>Order Information</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className='placeorder-texts'>Order</Col>
                    <Col className='placeorder-texts'>{cart.price} €</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className='placeorder-texts'>Shipping Price</Col>
                    <Col className='placeorder-texts'>
                      {cart.shippingPrice} €
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className='placeorder-texts'>Tax Price</Col>
                    <Col className='placeorder-texts'>{cart.taxPrice} €</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className='placeorder-texts'>
                      <strong>Total Price</strong>
                    </Col>
                    <Col className='placeorder-texts'>
                      <strong>{cart.totalPrice} €</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item> */}
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block save'
                    disabled={cart.inCart.length === 0}
                    onClick={placeOrderHandler}
                  >
                    NEXT
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PlaceOrder
