import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Link from 'next/link';

const HeaderNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="primary" dark expand="md">
				<NavbarBrand href="/">
					<img src="https://paddywackgifts.com/img/logo_white_transparent.png" height="54" alt="Paddy Wack Homemade Gifts" border="0" />
				</NavbarBrand>
				<NavbarToggler onClick={toggle} className="mr-2" />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className="px-4">
							<Link href="/"><a className="nav-link">Home</a></Link>
						</NavItem>
						<NavItem className="px-4">
							<Link href="/about/"><a className="nav-link">About</a></Link>
						</NavItem>
						<NavItem className="px-4">
							<Link href="/shop/"><a className="nav-link">Shop</a></Link>
						</NavItem>
						<NavItem className="px-4">
							<Link href="/gallery/"><a className="nav-link">Gallery</a></Link>
						</NavItem>
						<NavItem className="px-4">
							<Link href="/contact/"><a className="nav-link">Contact</a></Link>
						</NavItem>
						<NavItem className="px-4">
							<Link href="/join/"><a className="nav-link">Join</a></Link>
						</NavItem>
						<NavItem className="px-4">
							<Link href="/creator/"><a className="nav-link">Creator</a></Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	)
}

export default HeaderNav;