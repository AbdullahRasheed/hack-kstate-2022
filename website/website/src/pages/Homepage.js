import './Homepage.css';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

const Homepage = () => {
    const navigate = useNavigate();
    const signUpClick = () => {
        navigate('/signup')
    }
    const loginClick = () => {
        navigate('/login')
    } 
    return (
        <div className='Homepage'>
            <h1 className='Homepage-header'>
                Welcome to LeadTheBoard
            </h1>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={signUpClick} size='lg'>
                            Sign Up
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={loginClick} size='lg'>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  };
  
  export default Homepage;