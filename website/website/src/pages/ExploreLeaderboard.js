import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Login.css'
import PostUser, {PostLeaderboard} from './Connections/REST';
import { Navigate, useNavigate } from 'react-router-dom';

const Submit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    SubmitData(formDataObj);
}
 
async function SubmitData(data) {
    console.log(data);
    await PostLeaderboard("leaderboard/search", {name: data.name}).then(async(response) => {
        await PostUser("user/join", {id: response.data});
    })
}

function ExploreLeaderboard() {
    return(
    <Form onSubmit={Submit}>
      <Form.Group className="m-5">
        <Form.Label>Leaderboard Name</Form.Label>
          <FloatingLabel
            label="Name"
            className="mt-3"
          >
            <Form.Control name="name" type="username" placeholder="Username"/>
        </FloatingLabel>
      </Form.Group>

      <Button className="mx-5" variant="primary" type="submit">
        Join
      </Button>
    </Form>
  );
}

export default ExploreLeaderboard;