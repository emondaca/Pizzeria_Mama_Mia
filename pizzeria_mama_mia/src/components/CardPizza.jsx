import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const CardPizza = (props) => {
  return (
    <>
      <Card >
        <Card.Img variant="top" src= {props.img} />
        <Card.Body>
          <Card.Title> <h4><strong>{props.name}</strong></h4></Card.Title>
          <Card.Text className = "text-center">
              <hr></hr>
              <h4>Ingredientes:</h4>
              <h6>🍕 {props.ingredientes}</h6>
              <hr></hr>
              <h2>Precio: $<span >{props.precio}</span></h2>
          </Card.Text>
          <Container fluid = "true">
            <Row className = "mx-4">
              <Col>
                <Card.Link><Button type= "checkbox" variant = "outline-secondary" >Ver Más 👀</Button></Card.Link>
              </Col>
              <Col className = "text-end">
                <Card.Link><Button variant="dark">Añadir 🛒</Button></Card.Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>

  )
}

export default CardPizza