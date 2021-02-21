import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Row, Col, Modal, ModalBody } from 'reactstrap';
import swal from 'sweetalert';

const API_PATH = 'https://www.paddywackgifts.com/api/join/index.php';

const JoinForm = () => {
	const [joinName, setJoinName] = useState('');
	const [joinEmail, setJoinEmail] = useState('');
	const [joinPhone, setJoinPhone] = useState('');
	const [joinCountry, setJoinCountry] = useState('');
	const [countries, setCountries] = useState([]);
	const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);

	useEffect(() => {
		const fetchCountries = async () => {
			const result = await axios(
				'https://restcountries.eu/rest/v2/all'
			)

			setCountries(result.data);
		};

		fetchCountries();
	}, [])

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { joinName, joinEmail, joinPhone, joinCountry, message }
        })
        .then(result => {
            setMailSent(result.data.sent),
            swal("Success!", "We have received your join request and will respond in a few days.", "success")
        })
        .catch(error => swal("Uh oh!", "Something went wrong", "error"));
    };
	
	return (
		<Form className="form" onSubmit={e => handleFormSubmit(e)}>
			<Row>
				<Col>
					<p className="text-center display-5">Hello and welcome to Paddy Wack Gifts. If you have a passion and desire for art, you have come to the right place. Simply fill out the form below to let us know who you are and why you want to be a featured artist on our website. Alternately, you may email us directly at <a href="mailto:paddywackgifts@gmail.com" className="display-5">paddywackgifts@gmail.com</a>. We look forward to hearing from you.</p>
				</Col>
			</Row>
			<Row>
				<Col md={4}>
					<FormGroup>
						<Label for="joinName" className="display-4">Name</Label>
						<Input type="text" name="joinName" id="joinName" bsSize="lg" placeholder="Please Enter a Name" required value={joinName} onChange={e => setJoinName(e.target.value)} />
						<FormFeedback>Name is required to submit form</FormFeedback>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label for="joinEmail" className="display-4">Email</Label>
						<Input type="email" name="joinEmail" id="joinEmail" bsSize="lg" placeholder="Please Enter an Email" required value={joinEmail} onChange={e => setJoinEmail(e.target.value)} />
						<FormFeedback>Name is required to submit form</FormFeedback>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label for="joinPhone" className="display-4">Phone</Label>
						<Input type="phone" name="joinPhone" id="joinPhone" bsSize="lg" placeholder="Please Enter a Phone Number" value={joinPhone} onChange={e => setJoinPhone(e.target.value)} />
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md="4">
					<FormGroup>
						<Label for="joinCountry" className="display-4">Country</Label>
						<Input type="select" name="joinCountry" id="joinCountry" onChange={e => setJoinCountry(e.target.value)}>
							<option value="" selected disabled>Please select a country</option>
							{countries.map(item => {
								return (
									<option value={item.name}>{item.name}</option>
								)
							})}
						</Input>
					</FormGroup>
				</Col>
				<Col md="8">
					<FormGroup>
						<Label for="messageArea" className="display-4">Message</Label>
						<Input type="textarea" name="messageArea" id="messageArea" bsSize="lg" style={{height: '200px'}} placeholder="Please Leave a Message, a Comment, a Compliment, or a Suggestion" value={message} onChange={e => setMessage(e.target.value)} />
					</FormGroup>
					<Button color="primary">Submit</Button>{' '}
				</Col>
			</Row>
			<div>
				{mailSent}
			</div>
		</Form>
	)
}

export default JoinForm;
