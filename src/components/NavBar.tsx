import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import Logo from './Logo'
import { AppState } from '../redux/types'
import LocalStorage from '../local-storage'
import { logoutUser } from '../redux/actions/user'

const NavBar = () => {
  const user = useSelector((state: AppState) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogout = () => {
    LocalStorage.removeToken()
    history.push('/')
    dispatch(logoutUser())
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light' className="custom-nav">
      <LinkContainer to='/'>
        <Navbar.Brand className='logo'>
          <Logo />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' className='hamburger' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/services'>
            <Nav.Link>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact'>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          {user.isLoggedIn ? (
            <NavDropdown title={`${user.firstName}`} id='user-firstname'>
              <LinkContainer to='/user'>
                <NavDropdown.Item>Account</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
          {user && user.isAdmin === true && (
            <NavDropdown title='Admin' id='adminmenu'>
              <LinkContainer to='/admin/users'>
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/service'>
                <NavDropdown.Item>Add Service</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/orders'>
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
