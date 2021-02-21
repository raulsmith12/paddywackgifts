import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';

const SingleSection = ({ data: { loading, homepageSections } }) => {
 if (!loading) {
  return (
   <Row className="wrapper">
    {homepageSections.map(item => (
      <Col md={4} key={item.id} className="text-center">
        <img
          alt={item.header}
          src={item.icon.url}
        />
        <Link href={item.link}>
          <a>
            <h3>{item.header}</h3>
            <p>{item.content}</p>
          </a>
        </Link>
      </Col>
    ))}
   </Row>
  );
 }
 return <h2>Loading Posts...</h2>
};
const homepageSections = gql`
 query homepageSections {
  homepageSections {
    id,
    header,
    content,
    link,
    icon {
      url
    }
  }
}
`;
export default graphql(homepageSections)(SingleSection);
