import react from 'react';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation () {

    return (
        <Navbar bg="light" expand="lg">
            
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar" activekey="/home">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter logo/"></img>
            <Nav.Item> <Nav.Link href="/home">Home</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/profile">Profile</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/notifications">Notifications</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/messages">Messages</Nav.Link> </Nav.Item>
            </Nav>
            

        </Navbar>
            
    
    );
}

export default Navigation;