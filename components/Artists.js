import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Row, Col } from 'react-bootstrap';

class Artists extends React.Component {

  render() {
    const artistses = gql`
      query artistses {
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

    return (
      <Row>
        <Query query={artistses}>
          {artistses.map(item => (
            <Col key={item.id} md={4}>
              <img src={item.image.url} width="100%" alt={item.name} />
              <h3>{item.name}</h3>
              {item.description.html}
            </Col>
          ))}
        </Query>
      </Row>
    )
  }
};
  
export default Artists;
