import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { CarritoContext } from '../context/CarritoContext'

const CardPizza = (props) => {

  const { pizzasCarro, setPizzasCarro} = useContext(CarritoContext)

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
        <Card.Img variant="top" src= {props.imagen} />
        <Card.Body>
          <Card.Title> <h4><strong>{props.nombre}</strong></h4></Card.Title>
          <Card.Text>
            <h6>{props.descripcion}</h6>
          </Card.Text>
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
              <Button variant="dark" onClick={() => handleAgregar()}>Añadir 🛒</Button>
          </Card.Text>
          
          
        </Card.Body>
      </Card>
    </>

  )
}

export default CardPizza