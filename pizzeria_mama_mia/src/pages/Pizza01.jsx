/*import Header from '../components/Header'*/
/*import CardPizza from './CardPizza'*/
import Pizza from './Pizza'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
/*import { pizzas } from './pizzas'*/
import { useEffect, useState } from 'react'


const Pizza01 = () => {

  const [p001, setP001] = useState();
 
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const resp = await fetch('http://localhost:5000/api/pizzas');
    const data = await resp.json();
    console.log(data)
    setP001(data[0]);
  };
  console.log(p001);
 

  return (
    <>
        <Container>
        <Row>
            <Col>
              <Pizza 
                  imagen = {p001.img}
                  nombre = {p001.name}
                  descripcion = {p001.desc}
                  ingredientes = {p001.ingredients}
                  precio = {p001.price}
              >
              </Pizza>
            </Col>

        </Row>
        </Container>
    </>
  )
}

export default Pizza01