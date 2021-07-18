import { useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'

import { removeFromShoppingcart } from '../redux/actions/cart'

const CartItem = ({ service }: any) => {
  const dispatch = useDispatch()

  return (
    <>
      <ListGroup.Item key={service.id}>
        <Row>
          <Col md={6}>
            <p className='service-name'>
              {service.name}
            </p>
          </Col>
          <Col className='shoppingcart-service-price' md={3}>EUR {service.price}</Col>
          <Col md={3}>
            <Button
              className='shoppingcart-service-trash-button'
              type='button'
              variant='light'
              arial-label='delete'
              onClick={() => dispatch(removeFromShoppingcart(service.id))}
            >
              <i className='fas fa-trash'></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  )
}

export default CartItem
