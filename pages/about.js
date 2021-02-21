import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Row, Col } from 'reactstrap';

const aboutUs = ({ loading, data }) => {
 if (!loading) {
  return (
    <Row>
      <Col>
        <Container>
          <h1 className="offset-md-2">About Paddy Wack Gifts</h1>
          {data.abouts.map(item => (
            <Row key={item.id}>
              <Col md={6} className="offset-md-2">
                  <div dangerouslySetInnerHTML={{__html: item.aboutText.html }}/>
              </Col>
              <Col md={2} className="d-sm-none d-md-block">
                  <img src={item.aboutImage.url} width="100%" />
              </Col>
            </Row>
          ))}
          <Row>
            {data.artistses.map(item => (
              <Col md={4} key={item.id}>
                <img src={item.image.url} width="100%" alt={item.name} />
                <h3>{item.name}</h3>
                <p dangerouslySetInnerHTML={{__html: item.description.html }}/>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
  );
 }
 return <h2>Loading Posts...</h2>
};
const aboutData = gql`
  query {
    abouts (first: 1) {
      id,
      aboutSection,
      aboutImage {
        url
      },
      aboutText {
        html
      }
    }
    artistses {
      id,
      name,
      image {
        url
      },
      description {
        html
      }
    }
  }
`;

export default graphql(aboutData)(aboutUs);
