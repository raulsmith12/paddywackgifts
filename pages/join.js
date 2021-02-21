import React, { Component } from 'react';
import {
    Container,
	Row,
	Col
} from 'reactstrap';
import JoinForm from "../components/JoinForm";

const Join = props => (
	<Container>
	    <h1>Join Paddy Wack Gifts</h1>
        <Row>
            <Col>
                <JoinForm />
            </Col>
        </Row>
	</Container>
);

export default Join;
