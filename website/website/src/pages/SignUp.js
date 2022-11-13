import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './SignUp.css'
import PostUser from './Connections/REST';

const Submit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    SubmitData(formDataObj);
}

async function SubmitData(data) {
    console.log(data);
    await PostUser("SignUp", data);
}

function SignUp() {
  return (
    <Form onSubmit={Submit}>
      <Form.Group className="m-5">
        <Form.Label>Sign Up</Form.Label>
          <FloatingLabel
            label="Username"
            className="mt-3"
          >
            <Form.Control name="username" type="username" placeholder="Username"/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="m-5" controlId="formBasicPassword">
        <FloatingLabel
          label="Password"
          className="mt-3"
        >
          <Form.Control name="password" type="password" placeholder="Password" />
        </FloatingLabel>
        <Form.Text className="text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji
        </Form.Text>
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit" >
        Register
      </Button>
    </Form>
  );
}

export default SignUp;