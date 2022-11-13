import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { PostNewLeaderboard } from './Connections/REST';
import Alert from 'react-bootstrap/Alert';

var submitClicked = false;

// function ShowAlert() {
//     return(
//         <Alert variant="success" dismissible show={true}>Submitted successfully!</Alert>
//     )
// }

const Submit = e => {
    submitClicked = true;
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    SubmitData(formDataObj);
}

async function SubmitData(data) {
    console.log(data);
    await PostNewLeaderboard("MakeLeaderboard", data);
}

function MakeLeaderboard() {
    return (
      <Form onSubmit={Submit}>
        <Form.Group className="m-5">
            <Form.Label>Make a Leaderboard</Form.Label>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mt-3"
                >
                <Form.Control name="username" type="username" placeholder="Username"/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Description"
                className="mt-3"
                >
                <Form.Control name="description" type="text" placeholder="Username"/>
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
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form.Group>
      </Form>
    );
  }
  
  export default MakeLeaderboard;