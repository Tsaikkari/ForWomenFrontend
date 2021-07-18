import { Accordion, Card, Button, Row, Col } from 'react-bootstrap'

const ServicesAccordionTable = () => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Button}
          className='accordion-table-button'
          variant='link'
          eventKey='0'
        >
          <span>
            <Row>
              <Col md={4} className='accordion-button-col'>
                <h1 className='accordion-button-header text-center'>
                  <strong></strong>
                </h1>
                <p className='accordion-button-text text-center'>

                </p>
              </Col>
            </Row>
            {/* <hr style={{ width: '30%', borderStyle: 'none', borderTop: 'solid white', borderWidth: '2px'}}></hr> */}
            <div className='arrow-icon'><i className="fas fa-arrow-alt-circle-down"></i></div>
            <Row><Col md={12}><h5 className='vertaile my-3'>Compare services</h5></Col></Row>

          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <i className='icon fas fa-check-circle fa-4x'></i>
                </td>
                <td>
                  <i className='icon fas fa-check-circle fa-4x'></i>
                </td>
                <td>
                  <i className='icon fas fa-check-circle fa-4x'></i>
                </td>
              </tr>
            </tbody>
          </table>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ServicesAccordionTable
