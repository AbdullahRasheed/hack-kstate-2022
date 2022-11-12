import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function MakeLeaderboard() {
    return (
      <Form>
        <Form.Group className="m-5" controlId="formBasicUsername">
            <Form.Label>Make a Leaderboard</Form.Label>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mt-3"
                >
                <Form.Control type="username" placeholder="Username"/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Category"
                className="mt-3"
                >
                <Form.Control type="username" placeholder="Username"/>
            </FloatingLabel>
            <FloatingLabel 
                controlId="floatingSelect" 
                label="Leaderboard Types"
                className="mt-3"
                >
                <Form.Select aria-label="Floating type">
                    <option value="1">Time</option>
                    <option value="2">Numerical</option>
                    <option value="3">Other</option>
                </Form.Select>
            </FloatingLabel>
        </Form.Group>
      </Form>
    );
  }
  
  export default MakeLeaderboard;