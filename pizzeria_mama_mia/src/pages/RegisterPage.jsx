import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';


function RegisterPage() {

  const {user, setEmail, setPassword, setUser, registerMe} = useContext(UserContext)

  const [email, setMail] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setRepass] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == '' || pass == '' || repass == '') {
        alert('Debe completar todos los campos del formulario')
    } else if (pass.length < 6) {
        alert('La longitud del password debe ser mayor o igual a 6 caracteres')
    } else if (pass !== repass) {
        alert('El password no coincide con su confirmación')

    } else {
        alert ('datos enviados');
        setUser(email);
        
    };
    document.getElementById("#email").reset();

  }

  return (
    
    <Form className = "my-5">
        <h1 className= "mb-3 mx-5"><b>Registro</b></h1>
      <Form.Group className= "mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <input type="email" placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input type="password" placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 mx-5 w-50 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label>Confirme su Password</Form.Label>
        <input type="password" placeholder="Confirm your password" 
            onChange={(e) => setRepass(e.target.value)}
        />
      </Form.Group>

      <Button className="mx-5" variant="primary" type="submit" onClick = {registerMe}>
        Enviar
      </Button>
    </Form>
  );
}

export default RegisterPage;