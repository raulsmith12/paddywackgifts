import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';
import ShopCart from '../components/ShopCart';

const Shop = props => (
	<div>
		<h1 className="page-title">SHOP</h1>
		<Container>
			<ShopCart />
		</Container>
	</div>
);

export default Shop;
