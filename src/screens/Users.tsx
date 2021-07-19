import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
//import { useHistory } from 'react-router-dom'

import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUsersRequest } from '../redux/actions/users'
import { deleteUserRequest } from '../redux/actions/user'
import { AppState } from '../redux/types'

const Users = () => {
  const dispatch = useDispatch()
  //const history = useHistory()

  useEffect(() => {
    // if (user && user.isAdmin) {
    dispatch(getUsersRequest())
    // } else {
    //   history.push('/login')
    // }
    return () => { }
  }, [dispatch])

  const users = useSelector((state: AppState) => state.users)
  const { loading, error, list } = users

  const deleteHandler = (id: any) => {
    console.log('id', id)
    if (window.confirm('Are you sure you want to delete the user?')) {
      dispatch(deleteUserRequest(id))
    }
  }

  return (
    <>
      <h1 className='my-3 ml-3' style={{ color: '#4e5180', fontFamily: 'Poppins, sanf-serif' }}>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='users-table'>
          <thead className='user-title'>
            <tr className='user'>
              <th className='text-center'>ID</th>
              <th className='text-center'>R-ID</th>
              <th className='text-center'>ROLE</th>
              <th className='text-center'>FIRSTNAME</th>
              <th className='text-center'>LASTNAME</th>
              <th className='text-center'>MOBILE</th>
              <th className='text-center'>EMAIL</th>
              <th className='text-center'>ADMIN</th>
              <th className='text-center'>Update/Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                {user.group &&
                  <td>{user.group.id}</td>}
                <td>{user.role}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <a href={`receiver:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: '#4e5180' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/user/${user.id}/edit`}>
                    <Button className='btn-sm'>
                      <i className='fas fa-edit' style={{ color: '#fff' }}></i>
                    </Button>
                  </LinkContainer>
                  <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user.id)}>
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default Users
