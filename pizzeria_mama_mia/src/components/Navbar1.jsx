import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navbar1 = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">Pizzería Mamma Mía!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href=""><Button type= "checkbox" variant = "outline-light">🍕Home</Button></Nav.Link>
          <Nav.Link href=""><Button type= "checkbox" variant = "outline-light">🔐Login</Button></Nav.Link>
          <Nav.Link href=""><Button type= "checkbox" variant = "outline-light">🔐Registrar</Button></Nav.Link>
        </Nav>
        <Button type= "checkbox" variant = "outline-info" className = "me-2">🛒 Total:</Button>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbar1