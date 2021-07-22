import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Service from '../components/Service'
import { getServicesRequest } from '../redux/actions/resources'
import { AppState } from '../redux/types'

const Services = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServicesRequest())
    return () => { }
  }, [dispatch])

  const resources = useSelector((state: AppState) => state.resources)
  const { services, loading, error } = resources

  return (
    <>
      <Container fluid className='my-1 products-container'>
        <h5 className='header-under-pic order-service pb-2'>Services</h5>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {services &&
              services.map((service: any) => (
                <Col key={service.id} sm={12} xl={6} className='product-col'>
                  <Service service={service} />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default Services
