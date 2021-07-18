import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Col, Card } from 'react-bootstrap'

import { addToShoppingcart } from '../redux/actions/cart'

const Service = ({ service }: any) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const addToShoppingcartHandler = () => {
    dispatch(addToShoppingcart(service))
    history.push('/shoppingcart')
  }

  return (
    <>
      <Col sm={12} md={4} lg={5} className='my-2 products-col'>
        <Card.Body className='product-body'>
          <Card.Title className='product-title'>
            <strong>{service.name}</strong>
          </Card.Title>
          <Card.Text as='div' className='product product-text-left'>
            {service.description}
          </Card.Text>
        </Card.Body>
      </Col>
      <Col sm={12} md={4} lg={2} className='price-col my-2'>
        <Card.Body className='buy-card'>
          <h4 className='add-to-shoppingcart' onClick={addToShoppingcartHandler}>Add to shoppingcart</h4>
          <button
            className="buy-button"
            onClick={addToShoppingcartHandler}
            type='button'><i className="fas fa-shopping-cart"></i>
          </button>
          <Card.Text as='h4' className='service-price'>{`${service.price}`} </Card.Text>
        </Card.Body>
      </Col>
      <hr className='border-between-products'></hr>
    </>
  )
}

export default Service





