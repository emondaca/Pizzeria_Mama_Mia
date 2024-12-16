import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/styles.css'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = () => {

    return (
        <>
            <Row id = "not-found" className='my-5 mx-5 align-items-center justify-items-center'>
                <Col className = "text-center" >
                    <h6>Eduardo Mondaca</h6>
                    <p>emondaca.nk@gmail.com</p>
                </Col>
                <Col>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                </Col>
                <Col>
                    <Button>Salir</Button>
                </Col>
            </Row>


        </>
    )
}

export default Profile