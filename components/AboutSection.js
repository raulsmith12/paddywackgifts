import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Row, Col } from 'react-bootstrap';

class AboutSection extends React.Component {

  render() {
    const abouts = gql`
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
    `;

    return (
      <Query query={abouts}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          {data.abouts.map(item => (
            <Row key={item.id} className="justify-content-md-center">
              <Col md={6}>
                <div dangerouslySetInnerHTML={{__html: item.aboutText.html }}/>
              </Col>
              <Col md={2} className="d-sm-none d-md-block">
                <img src={item.aboutImage.url} width="100%" />
              </Col>
            </Row>
          ))}
        }}
      </Query>
    )
  }
};
  
export default AboutSection;
