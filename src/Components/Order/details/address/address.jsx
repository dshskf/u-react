import React, { Component } from 'react';
import { OrderAddress } from './styles';

export class Address extends Component {
	render() {
		const { username, phone, address, province, city } = this.props;
		return (
			<OrderAddress>
				<h1>{username}</h1>
				<h4>{phone}</h4>
				<h5>{province}</h5>
				<h6>{city}</h6>
				<p>{address}</p>
			</OrderAddress>
		);
	}
}

export default Address;