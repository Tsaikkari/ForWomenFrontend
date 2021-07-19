import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

import { AppState } from '../redux/types'

const SubNavBar = () => {
  const orders = useSelector((state: AppState) => state.user.orders)
  const isPaid = orders?.map((o: any) => o.isPaid)
  // TODO: change to flowers-svg + animation
  return (
    <Navbar expand='lg' collapseOnSelect className='subnavbar userpage-nav'>
      {!isPaid ? (
        <LinkContainer to='/user'>
          <Nav.Link className='mr-auto account-link'>My Account</Nav.Link>
        </LinkContainer>
      ) : (
        <nav className='justify-content-left'>
          <LinkContainer to='/stress'>
            <Nav.Link className='mr-auto sub-link'>Manage stress</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/notescalendar'>
            <Nav.Link className='mr-auto sub-link'>Notes & Calendar</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/fertility'>
            <Nav.Link className='mr-auto sub-link'>Fertility</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/fitness'>
            <Nav.Link className='mr-auto sub-link'>Fitness</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/user'>
            <Nav.Link className='mr-auto account-link'>My Account</Nav.Link>
          </LinkContainer>
        </nav>
      )}
    </Navbar>
  )
}

export default SubNavBar
