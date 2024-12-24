import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';


const Navbar1 = () => {
  const {pizzasCarro, setPizzasCarro} = useContext(CarritoContext);

  var total = 0;
    {pizzasCarro.map((props) => (
        total += props.count*props.price
    ))}

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">Pizzería Mamma Mía!</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <Button type= "checkbox" variant = "outline-light">🍕Home</Button>
          </Link>
          <Link to="/login">
            <Button type= "checkbox" variant = "outline-light">🔐Login</Button>
          </Link>
          <Link to="/register">
            <Button type= "checkbox" variant = "outline-light">🔐Registrar</Button>
          </Link>
        </Nav>
        <Link to="/cart">
          <Button type= "checkbox" variant = "outline-info" className = "me-2">🛒 Total: ${total} </Button>
        </Link>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbar1