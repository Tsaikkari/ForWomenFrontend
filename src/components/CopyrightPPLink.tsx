import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const CopyrightPPLink = () => {
  const year = new Date().getFullYear()

  return (
    <Navbar>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <LinkContainer to='/copyright'>
            <Nav.Link className='copyright text-center'>
              <span className="copyright-link">Copyright &copy; For Women {year}</span> | <span className="privacy-policy-link">Tietosuoja</span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CopyrightPPLink
