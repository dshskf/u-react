import React from 'react';
import { PriceList } from '../Courier/styles';
import { PriceDetail } from './styles';

class Price extends React.Component {
	render() {
		const { total, courier } = this.props;
		return (
			<PriceDetail>
				<PriceList>
					<span>Shipment</span>
					<p>Rp {courier}</p>
				</PriceList>
				<PriceList>
					<span>Total</span>
					<p>Rp {total}</p>
				</PriceList>
			</PriceDetail>
		);
	}
}

export default Price;
