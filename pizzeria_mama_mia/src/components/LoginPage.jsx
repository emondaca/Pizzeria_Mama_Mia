import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || pass == '') {
      alert('Debe completar todos los campos del formulario')
  } else if (pass.length < 6) {
      alert('La longitud del password debe ser mayor o igual a 6 caracteres')
  } else {
      alert ('Datos enviados')
  };

  document.getElementById('#email').reset();

  }

  return (
    <Form className = "mb-5">
      <h1 className= "mb-3 mx-5"><b>Login</b></h1>
      <Form.Group className="mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <input type="email" placeholder="Enter your email" id = 'email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input type="password" placeholder="Enter your password" 
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit" onClick = {handleSubmit}>
        Login
      </Button>
    </Form>
  );
}

export default LoginPage;