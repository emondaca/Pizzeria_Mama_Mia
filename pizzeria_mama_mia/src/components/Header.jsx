import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/styles.css'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <>
        <Row id = "header" className='mb-5 mx-5'>
          <Col className = "text-center" >
            <h1>¡Pizzería Mammma Mía!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          </Col>
        </Row>
    </>

  )
}

export default Header