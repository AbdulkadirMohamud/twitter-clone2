import react from 'react';
import {
Card,
ListGroup,
InputGroup,
Form,
Button,
} from "react-bootstrap";

function Trending () {

    return (
        <div style= {{ Padding: '30px'}}>
            <InputGroup className= "mb-3">
                <Form.Control
                placeholder= "search Twitter"
                aria-label= "recipient's username"
                aria-describedby= "basic-addon2"
                />
                <Button variant= "outline-secondary" id="button-addon2">
                search 
                </Button>
            </InputGroup>

            
        </div>
    );
}

export default Trending;