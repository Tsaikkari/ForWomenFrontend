import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Links = () => {
  return (
    <Navbar className="links">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link className="page-links">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link className="page-links">Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="page-links">Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link className="page-links">Sign Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link className="page-links">Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Links
