import React, { Component } from 'react';

import { OrderTotal, SubOrderTotal } from './styles';

export class Total extends Component {
	render() {
		const { product } = this.props;
		return (
			<OrderTotal>
				<SubOrderTotal>
					<label>Product</label>
					<p>Rp {product.total}</p>
				</SubOrderTotal>
				<SubOrderTotal>
					<label>Shipment fee</label>
					<p>Rp {product.shipment_fee}</p>
				</SubOrderTotal>
				<SubOrderTotal totalprice>
					<label>Total</label>
					<p>Rp {product.total + product.shipment_fee}</p>
				</SubOrderTotal>
			</OrderTotal>
		);
	}
}

export default Total;
