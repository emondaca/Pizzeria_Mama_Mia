/*import Header from '../components/Header'*/
/*import CardPizza from './CardPizza'*/
/*import Pizza from './Pizza' */
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
/*import { pizzas } from './pizzas'*/
import { useContext} from 'react'
import { useParams } from 'react-router-dom'
import { PizzasContext } from '../context/PizzasContext'
import CardPizza from '../components/CardPizza'


const PizzaDetalle = () => {

  const { id } = useParams();

  const { pizzas } = useContext (PizzasContext);
 
  const pizzaShow = pizzas.find((p) => p.id === id);


  return (
    <>
        <Container>
        <Row>
        
          <Col>
            <CardPizza 
                    imagen = {pizzaShow.img} 
                    nombre = {pizzaShow.name} 
                    descripcion = {pizzaShow.desc} 
                    ingredientes = {pizzaShow.ingredients}
                    precio = {pizzaShow.price}  
                >
                </CardPizza>  
            </Col>
          
        </Row>
        </Container>
    </>
  )
}

export default PizzaDetalle