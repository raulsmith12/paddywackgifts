import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Row, Col, Modal } from 'react-bootstrap';

const ArtGallery = () => {
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState();
    const [modalBody, setModalBody] = useState();

    const showModal = (caption, image) => {
        setModalImage(image);
        setModalBody(caption);
        setModal(true);
    };

    const artworks = gql`
        {
            artworks {
                id,
                caption,
                src {
                    url
                }
            }
        }
    `;

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Query query={artworks}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const worksArt = data.artworks.map(item => {
                        return (
                            <Col id={item.id} md={4} className="text-center">
                                <a onClick={() => showModal(item.caption, item.src.url)}>
                                    <img className="py-1" src={item.src.url} alt={item.caption} width="95%" />
                                </a>
                            </Col>
                        )
                    })

                    return (
                        <Row className="align-items-center">
                            {worksArt}
                        </Row>
                    )
                }}
            </Query>

            <Modal.Dialog isOpen={modal} toggle={toggle} className="modal-x1">
                <Modal.Body>
                    <Row>
                        <Col>
                            <img src={modalImage} width="100%" className="float-left" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="text-left">
                    {modalBody}
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default ArtGallery;