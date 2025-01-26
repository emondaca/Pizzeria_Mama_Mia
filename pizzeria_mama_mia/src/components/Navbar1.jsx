import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import '../assets/css/styles.css';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';

const Navbar1 = () => {
  const {tokenPresente, setToken} = useContext(TokenContext);
  const {pizzasCarro} = useContext(CarritoContext);
  const {handleLogout, getProfile} = useContext(UserContext);

  var total = 0;
    {pizzasCarro.map((props) => (
        total += props.count*props.price
    ))}

    const setActiveClass = ({isActive}) => (isActive ? "active-nav" : undefined) ;

 /* const handleLogout = () => {
      localStorage.setItem("token", null);
      setToken((localStorage.getItem("token") != 'null') ? true : false);
    }; */

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">Pizzería Mamma Mía!</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className={ setActiveClass}
          to="/">
            <Button type= "checkbox" variant = "outline-light" className="mx-2">🍕Home</Button>
          </NavLink>
          <NavLink className={ setActiveClass}
          to="/login">
            <Button type= "checkbox" variant = "outline-light" className= "mx-2"
            onClick={ handleLogout }>
              {tokenPresente ? '🔓 Logout' : '🔐Login'}
              </Button>
          </NavLink>
          <NavLink className={ setActiveClass}
          to= { tokenPresente ? "/profile" : "/register" }>
            <Button type= "checkbox" variant = "outline-light" className= "mx-2"
            onClick={getProfile}>
              {tokenPresente ? '🔓 Profile' : '🔐Registrar'}
            </Button>
          </NavLink>
        </Nav>
        <NavLink className={ setActiveClass}
        to="/cart">
          <Button type= "checkbox" variant = "outline-info" className = "me-2">🛒 Total: ${total} </Button>
        </NavLink>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbar1