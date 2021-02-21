import React, { Component } from 'react';
import {
    Container,
	Row,
	Col
} from 'reactstrap';
import ContactForm from "../components/Form";

const Contact = props => (
	<Container>
	    <h1>Contact Paddy Wack Gifts</h1>
        <Row>
            <Col>
                <ContactForm />
            </Col>
        </Row>
	</Container>
);

export default Contact;
