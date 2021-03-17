import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HeaderNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar bg="primary" variant="dark" expand="md">
				<Navbar.Brand href="/">
					<img src="https://paddywackgifts.com/img/logo_white_transparent.png" height="54" alt="Paddy Wack Homemade Gifts" border="0" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar" className="mr-2" />
				<Navbar.Collapse id="responsive-navbar">
					<Nav className="ml-auto">
						<Nav.Link href="/" className="nav-link px-4">Home</Nav.Link>
						<Nav.Link href="/about/" className="nav-link px-4">About</Nav.Link>
						<Nav.Link href="/shop/" className="nav-link px-4">Shop</Nav.Link>
						<Nav.Link href="/gallery/" className="nav-link px-4">Gallery</Nav.Link>
						<Nav.Link href="/contact" className="nav-link px-4">Contact</Nav.Link>
						<Nav.Link href="/join/" className="nav-link px-4">Join</Nav.Link>
						<Nav.Link href="/creator" className="nav-link px-4">Creator</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default HeaderNav;