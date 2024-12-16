import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

const Pizza = (props)=> {

  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [ingredientes, setIngredientes] = useState([]);
  const [precio, setPrecio] = useState();

  useEffect(() => {
    setImagen(props.imagen);
    setNombre(props.nombre);
    setDescripcion(props.descripcion);
    setIngredientes(props.ingredientes);
    setPrecio(props.precio)
  }, []);


  return (
    <>
     <Card >
        <Card.Img variant="top" src= {imagen} />
        <Card.Body>
          <Card.Title> <h4><strong>{nombre}</strong></h4></Card.Title>
          <Card.Text>
            <h6>{descripcion}</h6>
          </Card.Text>
          <Card.Text className = "text-center">
              <hr></hr>
              <h4>Ingredientes:</h4>
              <ListGroup horizontal className='border-0 align-items-center'>
                🍕 { ingredientes.map((ing) => (
                  <ListGroup.Item key={ing} className='border-0 mx-0 px-1'>
                  <h6>{ing}</h6>
                  </ListGroup.Item>
                ))}

              </ListGroup>
              <hr></hr>
              <h2>Precio: $<span >{precio}</span></h2>
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

export default Pizza