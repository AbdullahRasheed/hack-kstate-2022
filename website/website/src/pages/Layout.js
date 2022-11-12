import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Containter from 'react-bootstrap/Container';

var signedIn = false;

function loggedIn() {
    if (signedIn) {
        return(
            <Navbar.Text>
                Signed in as: <a href='/profile'>USERNAME</a>
            </Navbar.Text> 
        );
    }
    else {
        return(
        <Nav>
            <Nav.Link href='/signup'>Sign Up</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
        </Nav>
        );
    }
}

const Layout = () => {
  return (
    <>
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Containter>
                <Navbar.Brand href='/'>
                <img
                alt="Logo"
                src="/lead.ico"
                width="30"
                height="30"
                />{' '}
                LeadTheBoard
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='/viewleaderboard'>View Leaderboards</Nav.Link>
                    <Nav.Link href='/makeleaderboard'>Make a Leaderboard</Nav.Link>
                </Nav>
                {loggedIn()}
            </Containter>
        </Navbar>

        <Outlet />
    </>
  )
};

export default Layout