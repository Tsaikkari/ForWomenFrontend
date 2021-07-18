import { Row, Col } from 'react-bootstrap'

const StepsHeader = ({ step1, step2, step3, step4, step5 }: any) => {
  return (
    <>
      <Row>
        <Col sm={12} lg={12} md={12}>
          <section className='justify-content-center my-4 steps-section'>
            <ul className='circles-row'>
              {step1 ? (
                <li className='step active'>
                  <i className='icon-in-circle active fas fa-shopping-cart'></i>
                  Service
                </li>
              ) : (
                <li className='step'>
                  <i className='icon-in-circle fas fa-shopping-cart'></i>
                  Service
                </li>
              )}
              {step2 ? (
                <li className='step active'>
                  <i className='icon-in-circle fas fa-user-circle'></i>
                  Order and Login
                </li>
              ) : (
                <li className='step'>
                  <i className='icon-in-circle fas fa-user-circle'></i>
                  Order and Login
                </li>
              )}
              {step3 ? (
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
              {step4 ? (
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
              {step5 ? (
                <li className='step active'>
                  <i className='icon-in-circle fas fa-address-card active'></i>
                  Create Account
                </li>
              ) : (
                <li className='step'>
                  <i className='icon-in-circle fas fa-address-card'></i>
                  Create Account
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
