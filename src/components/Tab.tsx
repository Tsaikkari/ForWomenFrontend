import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tabs } from 'react-bootstrap'

import { AppState } from '../redux/types'

const Tab = ({ userForm, memberForm, orders }: any) => {
  const [key, setKey] = useState('orders')

  const user = useSelector((state: AppState) => state.user)
  return (
    <>
      {user.role === 'customer' && (
        <Tabs
          id='controlled-tab-example'
          activeKey={key}
          onSelect={(k: any) => setKey(k)}
        >
          <Tab eventKey='orders' title='Orders'>
            {orders}
          </Tab>
          <Tab eventKey='customer' title='1 My contact info'>
            {userForm}
          </Tab>
          <Tab eventKey='member' title='2 Add members'>
            {memberForm}
          </Tab>
        </Tabs>
      )}
      <>{user.role === 'member' && memberForm}</>
    </>
  )
}

export default Tab
