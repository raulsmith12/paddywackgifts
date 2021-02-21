import React, { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

const ArtCreator = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState('');
    const [mailSent, setMailSent] = useState(false);

    const onFileChange = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0]);

        setPreview(image_as_base64);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'multipart/form-data' },
            data: { customerName, customerEmail, customerPhone, message, preview }
        })
        .then(result => {
            setMailSent(result.data.sent),
            swal("Success!", "We have received your message and will respond in the next couple days.", "success")
        })
        .catch(error => swal("Uh oh!", "Something went wrong", "error"));
    };

    return (
        <div>
            <Row>
                <Col>
					<p className="display-5">Welcome to the Art Creator. Here, you have the ability to upload your own design (it can literally be <strong className="display-5">ANYTHING</strong> your heart desires) to submit what is called a "Custom Commission Piece". Remember, all pieces are subject to approval and Paddy Wack Homemade Gifts reserves the right to refuse working on a piece at the owner's discretion. Additionally, prices vary based on the size and complexity of the piece. For more information please contact us at <a className="display-5" href="mailto:paddywackgifts@gmail.com">paddywackgifts@gmail.com</a>.</p>
                </Col>
            </Row>
            <Form className="form" onSubmit={e => handleFormSubmit(e)}>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className="display-4">Name</Form.Label>
                            <Form.Control type="text" name="customerName" id="customerName" size="lg" placeholder="Please Enter a Name" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="display-4">Email</Form.Label>
                            <Form.Control type="email" name="customerEmail" id="customerEmail" size="lg" placeholder="Please Enter an Email" required value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="display-4">Phone</Form.Label>
                            <Form.Control type="phone" name="customerPhone" id="customerPhone" size="lg" placeholder="Please Enter a Phone Number" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className="display-4">Message</Form.Label>
                            <Form.Control type="textarea" name="message" id="message" size="lg" style={{height: '200px'}} placeholder="Do you have specific instructions? Special message?" value={message} onChange={e => setMessage(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Label className="display-4">Attach Image</Label>
                            <Form.Control type="file" name="attachment" onChange={onFileChange} />
                        </Form.Group>
                        <Button color="primary">Submit</Button>{' '}
                    </Col>
                </Row>
                <div>
                    {mailSent}
                </div>
            </Form>
            {preview && 
                <img src={preview} width="100%" />
            }
        </div>
    )
}

export default ArtCreator;
