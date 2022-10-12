import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Badge from 'react-bootstrap/Badge';

const FullDiv = styled.div`
    background-color: #00008B;
`


const ValidateDiv = styled.div`
    width: 400px;
    margin: auto;
    border : 2px solid;
    border-radius: 10px;
    background-color: #EEEEEE;
    padding: 10px;
`;

function FormValidation(){
    return(
        <FullDiv>
        <ValidateDiv>
        <h3>
            <Badge bg="secondary">Registration</Badge>
        </h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicnage">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasiccourse">
                <Form.Label>Course</Form.Label>
                <Form.Control type="text" placeholder="" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </ValidateDiv>
    </FullDiv>
    )
}

export default FormValidation;