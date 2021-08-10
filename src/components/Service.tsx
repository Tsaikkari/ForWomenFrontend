import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Service = ({ service }: any) => {
  console.log('service', service)
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/service/${service.id}`}>
        <Card.Img src={`/`} variant="top" height="300" width="auto"/>
      </Link>

      <Card.Body>
        <Link to={`/service/${service.id}`}>
          <Card.Title as="div">
            <strong>{service.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">
          {service.description}
        </Card.Text>
        <Card.Text as="h3">
          EUR {service.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Service





