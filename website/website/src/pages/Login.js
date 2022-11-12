import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Login.css'

function Login() {
  return (
    <Form>
      <Form.Group className="m-5" controlId="formBasicUsername">
        <Form.Label>Login</Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mt-3"
          >
            <Form.Control type="username" placeholder="Username"/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="m-5" controlId="formBasicPassword">
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Form.Text className="text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji
        </Form.Text>
      </Form.Group>
      <Form.Group className="mx-5" controlId="formBasicCheckbox">
        <Form.Check type="switch" label="Stay logged in" />
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit" >
        Login
      </Button>
    </Form>
  );
}

export default Login;