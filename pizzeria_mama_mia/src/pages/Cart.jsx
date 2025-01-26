import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import { Image, ListGroup, Button, Container, ListGroupItem } from 'react-bootstrap'
import { CarritoContext } from '../context/CarritoContext'
import { TokenContext } from '../context/TokenContext'

const Cart = () => {
  const {pizzasCarro, setPizzasCarro} = useContext(CarritoContext);
  const {tokenPresente} = useContext(TokenContext)

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

  /*checkout*/
  const handlePagar = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch("http://localhost:5000/api/checkouts", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
          pizzasCarro,
          }),
      });
      const data = await response.json();
      if (data.message == "Checkout successful") {
        alert(data.user.email + ":     " + "Su compra ha sido exitosa");
      } else {
        alert("Ha ocurrido un error, intente de nuevo en unos minutos");
      }
    };
  };

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
      <Button variant="dark" className='mx-3 mb-3' disabled = {!tokenPresente} onClick={ handlePagar }>Pagar</Button>
      <h3>{ tokenPresente ? "" : "Se requiere autenticación para realizar la compra"} </h3>
      </Container>
    </>

  )
}

export default Cart