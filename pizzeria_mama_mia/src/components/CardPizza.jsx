import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

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
              <ListGroup horizontal className='border-0 align-items-center'>
                🍕 { props.ingredientes.map((ing) => (
                  <ListGroup.Item key={ing} className='border-0 mx-0 px-1'>
                  <h6>{ing}</h6>
                  </ListGroup.Item>
                ))}

              </ListGroup>
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