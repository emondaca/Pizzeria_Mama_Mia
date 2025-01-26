import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from 'react'
/*import { TokenContext } from '../context/TokenContext';*/
import { UserContext } from '../context/UserContext';

function LoginPage() {
  
  const { getToken, setEmail, setPassword} = useContext(UserContext);
  /*const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")*/

  /*const getToken = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email,
    password,
    }),
    });
    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    setToken((localStorage.getItem("token") != null) ? true : false)

  };*/

  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || password == '') {
      alert('Debe completar todos los campos del formulario');
  } else if (password.length < 6) {
            alert('La longitud del password debe ser mayor o igual a 6 caracteres');
  } else {        
    alert ('Datos enviados');       
  };

  document.getElementById('#email').reset();

  }*/

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
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit" onClick = {getToken}>
        Login
      </Button>
    </Form>
  );
}

export default LoginPage;