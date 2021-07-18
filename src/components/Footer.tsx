import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Container, Row, Col } from 'react-bootstrap'

import Links from './Links'

import CopyrightPPLink from './CopyrightPPLink'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <div className='page-links text-center'>
          <Links />
          <hr></hr>
          <CopyrightPPLink />
        </div>
        <Row className='footer-row'>
          <Col xs={12} md={6} className='text-center links'>
            <LinkContainer to='/copyright'>
              <Nav.Link className='copyright copyright-mobile'>
                Copyright &copy; For Women {year} | Privacy Policy
              </Nav.Link>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
