import React, { Component } from 'react';
import {
	Container,
	Row,
} from 'reactstrap';
import ArtGallery from '../components/ArtGallery'

const Gallery = () => (
	<Container>
	    <h1>Gallery</h1>
		<ArtGallery />
	</Container>
);

export default Gallery;
