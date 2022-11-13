import Outlet, { json } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ViewLeaderboard.css'
import { PostLeaderboard } from './Connections/REST'
import { GetLeaderboards } from './Connections/REST';
import { GetLeaderboardData } from './Connections/REST';

const Submit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    SubmitData(formDataObj);
}

async function SubmitData(data) {
    console.log(data);
    await PostLeaderboard("ViewLeaderboard", data);
}

function GetLBs() {
    return GetLeaderboards("");
}

function GetLBData(id) {
    return GetLeaderboardData("", id)
}

function DisplayOneLeaderboard(name, description) {
    return (
        <section className='ViewLeaderboard-section'>
            <h1>
                {name}
            </h1>
            <p>
                {description}
            </p>
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
    )
}

function DisplayLeaderboards() {
    var leaderboards = GetLBs();

    const data = leaderboards.ids.map(id => {
        const info = GetLBData(id);
        return DisplayOneLeaderboard(info.name, info.description);
    })

    return (
        {data}
    )
}

function ViewLeaderboard() {
    return(
        <div className='ViewLeaderboard'>
            {DisplayLeaderboards()}
        </div>
    );
}

export default ViewLeaderboard