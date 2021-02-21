import App from 'next/app';
import Router from 'next/router';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { PageTransition } from 'next-page-transitions';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHCMS_API = 'https://api-uswest.graphcms.com/v1/cjrhbaq3h9orx01ggaap5tox7/master'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

class MyApp extends App {
	render() {
		
		const { Component } = this.props;
		
		return (
			<div>
				<ApolloProvider client={client}>
					<Page>
						<PageTransition timeout={300} classNames="page-transition">
							<Component />
						</PageTransition>
						<style jsx global>{`
							.page-transition-enter {
								opacity: 0;
							}
							.page-transition-enter-active {
								opacity: 1;
								transition: opacity 300ms;
							}
							.page-transition-exit {
								opacity: 1;
							}
							.page-transition-exit-active {
								opacity: 0;
								transition: opacity 300ms;
							}
						`}</style>
					</Page>
				</ApolloProvider>
			</div>
		);
	}
}

export default withData(MyApp);
