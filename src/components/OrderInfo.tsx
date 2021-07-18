import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

import Message from './Message'

import { AppState } from '../redux/types'

const OrderInfo = () => {
  const user = useSelector((state: AppState) => state.user)
  const { firstName, lastName, orders } = user

  return (
    <>
      {/* <h5 className='order-header'>Order Info</h5> */}
      {/* TODO: fix */}
      {!orders ? (
        <Message>You don't have an order</Message>
      ) : (
        <ListGroup variant='flush'>
          {orders.map((order: any) => (
            <>
              <ListGroup.Item>
                <h2 className='order-headers'>Shipping Address</h2>
                <p className='customer-name'>
                  {firstName} {lastName}
                </p>
                <p className='order-texts'>
                  Address: {order.address},{' '}
                  {order.postalCode},{' '}
                  {order.city}
                </p>
                {order.isDelivered ? (
                  <Message variant='success'>
                    Delivered {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant='danger'>Not delivered</Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2 className='order-headers'>Payment</h2>
                <p className='order-texts'>Payment Method: {order.paymentMethod}</p>
                {order.isPaid ? (
                  <Message variant='success'>Paid {order.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Unpaid</Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2 className='placeorder-headers'>Service</h2>
                {order.name}, {order.price}
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default OrderInfo
