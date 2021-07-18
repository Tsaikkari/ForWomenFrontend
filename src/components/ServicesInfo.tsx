import { Row, Col, Card } from 'react-bootstrap'

const ServicesInfo = () => {
  return (
    <>
      <Row className='box-row'>
        <Col xs={12} md={6} className='icon-col'>
          <div className='icon-box'>
            <i className='fas fa-users'></i>
          </div>
        </Col>
        <Col xs={12} md={6} className='info-col'>
          <Card.Body>
            <Card.Title className='services-info-title'>
              <strong></strong>
            </Card.Title>

          </Card.Body>
        </Col>
      </Row>
    </>
  )
}

export default ServicesInfo
