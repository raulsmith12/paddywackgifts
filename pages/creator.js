import React, { Component } from 'react';
import {
    Container,
	Row,
	Col
} from 'reactstrap';
import ArtCreator from "../components/ArtCreator";

const Creator = props => (
	<Container>
	    <h1>Art Creator</h1>
        <Row>
            <Col>
                <ArtCreator />
            </Col>
        </Row>
	</Container>
);

export default Creator;
