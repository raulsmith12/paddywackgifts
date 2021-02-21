import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import HeaderNav from './HeaderNav';
import { Container } from 'react-bootstrap';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
	<Container fluid className="px-0">
		<HeaderNav />
	</Container>
);

export default Header;
