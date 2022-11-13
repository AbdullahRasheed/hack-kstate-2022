import './Homepage.css';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Homepage = () => {
    return (
        <div className='Homepage'>
            <h1 className='Homepage-header'>
                Welcome to LeadTheBoard
            </h1>
            <p className='Homepage-p'>  
                Hello
            </p> 
            <Button></Button>
        </div>
    )
  };
  
  export default Homepage;