import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

import Loader from '../components/Loader'
import Message from '../components/Message'

import { addToShoppingcart } from '../redux/actions/cart'
import ServiceContext from '../context/index'
import { AppState } from '../redux/types'

interface RouteParams {
  id: string
}

const ServiceScreen = ({ history }: any) => {
  const { id } = useParams<RouteParams>()
  const dispatch = useDispatch()
  const resources = useSelector((state: AppState) => state.resources)
  const { loading, error, services } = resources
  const service = services.find((s: any) => s.id === Number(id))

  const addToShoppingcartHandler = () => {
    dispatch(addToShoppingcart(service))
    history.push(`/shoppingcart/`)
  }
  return (
    <ServiceContext.Provider value={{ service }}>
      <Link className='btn btn-light my-3' to='/services'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={3}>
            <Image
              src={``}
              alt={service.name}
              className='image'
              fluid
            />
          </Col>
          <Col md={5}>
            <ListGroup variant='flush'>
              <ListGroup.Item className='service-info'>
                <h3>{service.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: EUR {service.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {service.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>EUR {service.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    onClick={addToShoppingcartHandler}
                    className='btn-block'
                    type='button'
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </ServiceContext.Provider>
  )
}

export default ServiceScreen
