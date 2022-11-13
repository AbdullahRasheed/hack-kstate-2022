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
import { useCallback, useEffect, useState } from 'react';

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

async function GetLBs() {
    return await GetLeaderboards("user/leaderboards");
}

async function GetLBData(lid) {
    return await GetLeaderboardData("leaderboard/info", {id: lid})
}

function DisplayOneLeaderboard(name, description, k) {
    return (
        <section key={k} className='ViewLeaderboard-section'>
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

function ViewLeaderboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            setData([]);
            const lbs = await GetLBs();
            console.log(lbs);
            for(const id of lbs){
                console.log(id);
                const info = await GetLBData(id);
                console.log(info);
                setData(prev => {
                    return [
                        ...prev,
                        {name: info.name, description: info.description}
                    ]
                });
            }
        }

        fetchInfo();
    }, []);

    return(
        <div className='ViewLeaderboard'>
            {data.map((info, i) => DisplayOneLeaderboard(info.name, info.description, i))}
        </div>
    );
}

export default ViewLeaderboard