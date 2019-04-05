import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
	render() {
		return (
			<div>
				<span>REVIEW YOUR CARTS</span>
				<span>Cara's Breakup Survival Kit</span>
				<img src="https://d2i72ju5buk5xz.cloudfront.net/gsc/2TLY0R/70/a9/c5/70a9c556b10540a5bab2cd3936f3ea8b/images/cart/u1752.png?token=d663ff51e9a0952fa31f2ad9b64b183b" />
				<span>SHARE LINK</span>
				{/* <div>copy link area, unsure how to do that</div> */}
				<span>Close Date: {/*The date value*/} */</span>
				<span>PRICE</span>
				<span>QUANTITY</span>
				<span>TOTAL</span>
				<span>CUSTOM BOX</span>
				<span>Contains</span>
			</div>
		);
	}
}

export default Cart;
