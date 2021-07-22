import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button, Card, Container } from 'react-bootstrap'

import Message from '../components/Message'
import StepsHeader from '../components/StepsHeader'
import CartItem from '../components/CartItem'
import { AppState } from '../redux/types'

const Cart = ({ history }: any) => {
  const selectedServices = useSelector(
    (state: AppState) => state.cart.inCart
  )

  const submitHandler = () => {
    console.log('selectedServices', selectedServices)
    history.push('/shipping')
  }

  // back button
  const handleClick = () => {
    history.push('/services')
  }

  return (
    <>
      <StepsHeader step1 user={1} payment={1} account={1} />
      <Container className='shoppingcart-container'>
        <Row>
          <Col className='shoppingcart-services-col' md={8}>
            <h1 className='shoppingcart-header'>Services</h1>
            {selectedServices.length === 0 ? (
              <Message>
                Your shopping cart is empty{' '}
                <Link to='/services'>Choose a service</Link>
              </Message>
            ) : (
              <ListGroup variant='flush'>
                {selectedServices.map((service: any) => (
                  <CartItem service={service} />
                ))}
              </ListGroup>
            )}
            <Button
              onClick={handleClick}
              className='shoppingcart-back-button'
            >
              PREVIOUS
            </Button>
          </Col>
          <Col md={4} className='price-sum-col'>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item className='text-center'>
                  <h2>
                    {selectedServices.map((s: any) =>
                      s.price.toFixed(2)
                    )} € / 1 kk
                  </h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block save'
                    onClick={submitHandler}
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

export default Cart
