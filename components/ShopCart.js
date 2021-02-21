import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { CardDeck, Card, CardImg, CardBody, CardTitle, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ShopCart = () => {
  const [modal, setModal] = useState(false);
  const [key, setKey] = useState('');
  const [modalHead, setModalHead] = useState('');
  const [modalImage, setModalImage] = useState('');
  const [modalItem, setModalItem] = useState([]);
  const [modalBody, setModalBody] = useState('');
  const [modalPrice, setModalPrice] = useState('');

  const toggle = () => setModal(!modal);

  const showModal = (id, name, image, item, description, price) => {
    setKey(id);
    setModalHead(name);
    setModalImage(image);
    setModalItem(item);
    setModalBody(description);
    setModalPrice(price);
    setModal(true);
  };

  const artPieces = gql`
  {
    artPieces
    (
      orderBy: createdAt_DESC
    )
    {
      id,
      itemId,
      itemName,
      itemImage{
        url
      },
      itemDescription,
      price
    }
  }
  `;

  return (
    <div>
      <Query query={artPieces}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const shopItems = data.artPieces.map(item => (
            <Col md={3} className="mb-2">
              <Card body inverse color="primary" className="text-center">
                <div className="card-img-placeholder">
                  <CardImg top width="100%" src={item.itemImage[0].url} alt={item.itemName} />
                </div>
                <CardBody>
                  <CardTitle className="display-5">{item.itemName}</CardTitle>
                  <Button onClick={() => showModal(item.itemId, item.itemName, item.itemImage[0].url, item.itemImage, item.itemDescription, item.price)}>Show More</Button>
                </CardBody>
              </Card>
            </Col>
          ))

          return (
            <CardDeck>
              {shopItems}
            </CardDeck>
          )
        }}
      </Query>

      <Modal className="modal-xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-primary text-white">
          <h3>{modalHead}</h3>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={7}>
              <img src={modalImage} width="100%" className="float-left" />
              <Row>
                <Col>
                  {modalItem.map(image => (
                    <a onClick={() => setModalImage(image.url)}><img src={image.url} width="50" height="50" /></a>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <div dangerouslySetInnerHTML={{__html: modalBody}}></div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <h3 className="float-left text-left">${modalPrice}</h3>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value={key} />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ShopCart;
