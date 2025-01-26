import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useContext } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { CarritoContext } from '../context/CarritoContext'
import { useNavigate } from 'react-router-dom'

const Pizza = (props)=> {
  const { pizzasCarro, setPizzasCarro } = useContext(CarritoContext);

  const [id, setId] =useState();
  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [ingredientes, setIngredientes] = useState([]);
  const [precio, setPrecio] = useState();

  useEffect(() => {
    setId(props.id)
    setImagen(props.imagen);
    setNombre(props.nombre);
    setDescripcion(props.descripcion);
    setIngredientes(props.ingredientes);
    setPrecio(props.precio)
  }, []);

  const navigate = useNavigate();
  
  const handleAgregar = () => {
    var indexOfPizza = pizzasCarro.map(pizza => pizza.id).indexOf(props.id);

   if (indexOfPizza  >= 0) {
      pizzasCarro[indexOfPizza].count++;
    }
    else {
      pizzasCarro.push({id: props.id, img: props.imagen, name: props.nombre, price: props.precio, count: 1});
    };
    setPizzasCarro([...pizzasCarro]);
  }

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
                <Card.Link><Button type= "checkbox" variant = "outline-secondary" onClick={() => navigate(`/pizza/${props.id}`)}>Ver Más 👀</Button></Card.Link>
              </Col>
              <Col className = "text-end">
                <Card.Link><Button variant="dark" onClick={() => handleAgregar()}>Añadir 🛒</Button></Card.Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>

  )
}

export default Pizza