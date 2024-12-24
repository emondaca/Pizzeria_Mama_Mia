import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import { Image, ListGroup, Button, Container, ListGroupItem } from 'react-bootstrap'
import { CarritoContext } from '../context/CarritoContext'

const Cart = () => {
  const {pizzasCarro, setPizzasCarro} = useContext(CarritoContext);

  const handleAgregar = (indice) => {
    pizzasCarro[indice].count++;
    setPizzasCarro([...pizzasCarro]);
  }

  const handleQuitar = (indice) => {
    pizzasCarro[indice].count--;
    setPizzasCarro([...pizzasCarro.filter((pizza) => pizza.count > 0)]);
  }

  var total = 0;
  {pizzasCarro.map((props) => (
        total += props.count*props.price
  ))}

  return (
    <>
      <Container className='mt-5'>

      <h3 className='mx-3'>Detalles del Pedido:</h3>

      {pizzasCarro.map((pizza, indice) => (
        <ListGroup key={indice} horizontal className='my-2 w-50 align-items-center border-0'>
          <ListGroup.Item className='border-0 w-50'>
            <Image src= { pizza.img} className='h-25 w-100'></Image></ListGroup.Item>
          <ListGroup.Item className='border-0 w-100'><h4>{pizza.name}</h4></ListGroup.Item>
          <ListGroup.Item className='border-0 w-25'><h4>${pizza.price}</h4></ListGroup.Item>
          <ListGroup.Item className='border-0'><Button variant="outline-danger" onClick={() => handleQuitar(indice)}><h1>-</h1></Button></ListGroup.Item>
          <ListGroupItem className='border-0'><h4>{pizza.count}</h4></ListGroupItem>
          <ListGroup.Item className='border-0'><Button variant="outline-info" onClick={() => handleAgregar(indice)}><h1>+</h1></Button></ListGroup.Item>
        </ListGroup>
      ))}

      <h2 className='mx-3 my-4'><b>Total: ${total}</b></h2>
      <Button variant="dark" className='mx-3 mb-3'>Pagar</Button>
      </Container>
    </>

  )
}

export default Cart