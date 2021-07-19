import { Row, Col } from 'react-bootstrap'

const StepsHeader = ({ step1, step2, step3 }: any) => {
  // TODO: separate steps for shipping and payment
  return (
    <>
      <Row>
        <Col sm={12} lg={12} md={12}>
          <section className='justify-content-center my-4 steps-section'>
            <ul className='circles-row'>
              {step1 ? (
                <li className='step active'>
                  <i className='icon-in-circle active fas fa-shopping-cart'></i>
                  Shopping cart
                </li>
              ) : (
                <li className='step'>
                  <i className='icon-in-circle fas fa-shopping-cart'></i>
                  Shopping cart
                </li>
              )}
              {step2 ? (
                <li className='step active'>
                  <i className='icon-in-circle active fas fa-truck'></i>
                  Contact and Shipping
                </li>
              ) : (
                <li className='step'>
                  <i className='icon-in-circle fas fa-truck'></i>
                  Contact and Shipping
                </li>
              )}
              {step3 ? (
                <li className='step active'>
                  <i className='icon-in-circle far fa-credit-card active'></i>
                  Summary, Payment
                </li>
              ) : (
                <li className='step'>
                  <i className='icon-in-circle far fa-credit-card'></i>
                  Summary, Payment
                </li>
              )}
            </ul>
          </section>
        </Col>
      </Row>
    </>
  )
}

export default StepsHeader
