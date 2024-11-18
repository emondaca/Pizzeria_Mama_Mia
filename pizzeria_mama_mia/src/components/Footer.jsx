import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container fluid="true" >
      <Row className= "text-center bg-dark text-white py-3">
        <Col>
            <h5>&#169;2021 - Pizzería Mamma Mía - Todos los derechos reservados</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer