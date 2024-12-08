import Header from './Header'
/*import CardPizza from './CardPizza'*/
import Pizza from './Pizza'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
/*import { pizzas } from './pizzas'*/
import { useEffect, useState } from 'react'


const Home = () => {

  const [pizzas, setPizzas] = useState([]);
 
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const resp = await fetch('http://localhost:5000/api/pizzas');
    const data = await resp.json();
    setPizzas(data);
  };
 

  return (
    <>
        <Header></Header>
        
        <Container>
        <Row>
           {pizzas.map((props) => (
            <Col key = {props} >
                <Pizza 
                    imagen = {props.img}
                    nombre = {props.name}
                    descripcion = {props.desc}
                    ingredientes = {props.ingredients}
                    precio = {props.price}
                >

                </Pizza>
            </Col>

        ))}
           
        </Row>
        </Container>
    </>
  )
}

export default Home