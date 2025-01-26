import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/styles.css'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { TokenContext } from '../context/TokenContext'


const Profile = () => {
    const { getProfile, user} = useContext(UserContext);

    return (
        <>
            <Row id = "not-found" className='my-5 mx-5 align-items-center justify-items-center'>
                <Col className = "text-center" >
                    <h6>{ user.email }</h6>
                </Col>
                <Col>
                    <Link to="/">
                        <Button>Salir</Button>
                    </Link>
                </Col>
            </Row>


        </>
    )
}

export default Profile