import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/styles.css'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <>
            <Row id = "not-found" className='my-5 mx-5 align-items-center justify-items-center'>
                <Col className = "text-center" >
                   <img src="src\assets\img\pixeltrue-broken-robot-with-error-404-1.jpg" />
                    <h1>Uuupss, al parecer a ocurrido un error!!!</h1>
                    <p>No encontramos la página que buscas</p>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                </Col>
            </Row>


        </>
    )
}

export default NotFound