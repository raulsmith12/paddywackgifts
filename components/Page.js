import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { Row, Col } from 'reactstrap';
import ReactGA from 'react-ga';

const GRAPHCMS_API = 'https://api-us-west-2.graphcms.com/v2/cjrhbaq3h9orx01ggaap5tox7/master';

ReactGA.initialize('UA-138044372-2');

class Page extends Component {
	render() {
		return (
			<React.Fragment>
				<Meta />
				<Header />
				<Row>
					<Col className="main-header">
						{this.props.children}
					</Col>
				</Row>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Page;
