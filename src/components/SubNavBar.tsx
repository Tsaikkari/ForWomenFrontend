import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

import { AppState } from '../redux/types'

const SubNavBar = () => {
  const orders = useSelector((state: AppState) => state.user.orders)
  const isPaid = orders?.map((o: any) => o.isPaid)
  // isPaid default = false

  return (
    <Navbar expand='lg' collapseOnSelect className='subnavbar userpage-nav'>
      {isPaid ? (
        <LinkContainer to='/user'>
          <Nav.Link className='mr-auto account-link'>Account</Nav.Link>
        </LinkContainer>
      ) : (
        <nav className='justify-content-left'>
          <LinkContainer to='/'>
            <Nav.Link className='mr-auto'></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Nav.Link className='mr-auto'></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/user'>
            <Nav.Link className='mr-auto account-link'>Account</Nav.Link>
          </LinkContainer>
        </nav>
      )}
    </Navbar>
  )
}

export default SubNavBar
