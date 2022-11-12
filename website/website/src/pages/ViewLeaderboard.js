import Outlet from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ViewLeaderboard.css'
import {PostUser} from './Connections/REST'

const axios = require('axios').default;

const Submit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    SubmitData(formDataObj);
  }

async function SubmitData(data) {
    console.log(data);
    //await PostUser("ViewLeaderboard", data)
    const reg = {
        username: "test",
        password: "test"
    }
    await PostUser("autb/register", reg);
}

function ViewLeaderboard() {
    return(
        <div className='ViewLeaderboard'>
            <section className='ViewLeaderboard-section'>
                <h1>Leaderboard Topic</h1>
                <Table striped bordered size='sm'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ding</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dong</td>
                            <td>89</td>
                        </tr>
                    </tbody>
                </Table>
                <Form onSubmit={Submit}>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Control name='hours' type='number' placeholder="Enter Hours: " />
                            </Col>
                            <Col>
                                <Form.Control name='minutes' type='number' placeholder="Enter Minutes: " />
                            </Col>
                            <Col>
                                <Form.Control name='seconds' type='number' placeholder="Enter Seconds: " />
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </section>
        </div>
    );
}

export default ViewLeaderboard