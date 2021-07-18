import { Row } from 'react-bootstrap'

const CustomRow = ({ children }: any) => {
  return (
    <Row className='halfpage-row'>
      {children}
    </Row>
  )
}

export default CustomRow
