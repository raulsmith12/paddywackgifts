import React, { useState } from 'react';
import { Container, Alert } from 'reactstrap';
import Link from 'next/link';

const Footer = () => {
    const [count, setCount] = useState(0);

    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
        setCount(count + 1);
    }

	return (
		<div>
			<Container fluid className="bg-secondary px-0">
				<h3 className="text-center text-white py-3">&copy; {(new Date().getFullYear())} Paddy Wack Homemade Gifts, LLC. All Rights Reserved.</h3>
				<p align="center" className="text-white">
					<Link href="/"><a className="text-white">Home</a></Link>&nbsp;|&nbsp;
					<Link href="/contact/"><a className="text-white">Contact</a></Link>&nbsp;|&nbsp;
					<Link href="/privacy/"><a className="text-white">Privacy Policy</a></Link>
				</p>
			</Container>
			{count == 0 &&
				<Alert isOpen={visible} toggle={onDismiss} className="fixed-bottom">
					<h4 className="alert-heading">Our Commitment to Your Privacy</h4>
					<p>
						Paddy Wack Homemade Gifts values the privacy of our customers above all else. We remain committed to making sure that you feel safe and secure when visiting our site. Please visit our privacy policy page to learn more about what information we collect and how we use it.
					</p>
				</Alert>
			}
		</div>
	)
};

export default Footer;
