import Header from './Header'
import CardPizza from './CardPizza'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
import { pizzas } from './pizzas'

const Home = () => {
  return (
    <>
        <Header></Header>
        
        <Container>
        <Row>
            {pizzas.map((props) => (
            <Col key={props}>
                <CardPizza 
                    name = {props.name}
                    precio = {props.price}
                    ingredientes = {props.ingredients}
                    img = {props.img}
                >
                </CardPizza>
            </Col>

        ))}
           
        </Row>
        </Container>
    </>
  )
}

export default Home