// import { Row, Col, Container } from 'react-bootstrap'

// import ContactForm from '../components/ContactForm'

import { Image, Container } from 'react-bootstrap'
import underConstruction from '../images/under-construction.jpg'

const Contact = () => {
  return (
    <>
      <Container>
        <Image
          src={`${underConstruction}`}
          style={{
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
          }}
        ></Image>
      </Container>
    </>
  )
}

export default Contact
