import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ImageCard = () => {
  return (
    <Card className='home-image-card manfamily'>
      {/* <Link to={`${link}`}>{text3} */}
      <Card.Img variant='top' height='550' width='auto' />
      {/* </Link> */}

      <Card.Body>
        <Card.Title as='div' className='image-text text-center'>

        </Card.Title>
        <Card.Text as='div' className='image-link text-center'>
          <Link to='/services'>
            <strong>Lue lisää</strong>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ImageCard
