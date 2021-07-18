import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Group from './Group'
import Intro from './Intro'
import OrderInfo from './OrderInfo'
import { AppState } from '../redux/types'

const Order = () => {
  const user = useSelector((state: AppState) => state.user)
  //const orders = useSelector((state: AppState) => state.user.orders)
  //const isPaid = orders?.map((o: any) => o.isPaid)

  return (
    <Row>
      <Col md={6} sm={12} className='order-col'>
        <OrderInfo />
      </Col>

      <Col md={6} sm={12} className='variation-col'>
        {user && user.group && user.group.members && user.group.members.length > 1 ? (
          <Group />
        ) : (
          <Intro />)}
      </Col>
    </Row>
  )
}

//<a href="https://www.freepik.com/vectors/design">Design vector created by freepik - www.freepik.com</a>

export default Order
