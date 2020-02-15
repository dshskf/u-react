import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { pullSellerInvoice } from '../../../Redux/Product/product-selector'
import { pullDetail } from '../../../Redux/Order/order-selector';
import { SubOrder, InvoiceButton, OrderTitle, OrderPath, EmptyContainer } from './styles';

export class OrderContainer extends Component {

	render() {
		const { invoice, sellerPage, order } = this.props
		let data = sellerPage ? invoice.data : order.data

		return (
			<OrderPath>
				<OrderTitle>
					<p>Invoice</p>
					<p>Order Date</p>
					<p>Pay Before</p>
					<p>Total</p>
					<p>Status</p>
				</OrderTitle>
				{
					data.length > 0 ?
						data.map((data, index) => {
							return (
								<SubOrder key={index}>
									<InvoiceButton
										type='submit'
										name={data.buyerId}
										onClick={this.props.clickInv}
										id={data._id}
										value={'INV-' + data._id.substring(0, 8)}
									/>
									<p>
										{data.orderDate.substring(8, 10) +
											'/' +
											data.orderDate.substring(5, 7) +
											'/' +
											data.orderDate.substring(0, 4)}
									</p>
									<p>
										{data.expiredDate.substring(8, 10) +
											'/' +
											data.expiredDate.substring(5, 7) +
											'/' +
											data.expiredDate.substring(0, 4)}
									</p>
									<p>Rp {data.total + data.shipment_fee}</p>
									<p>{data.status}</p>
								</SubOrder>
							);
						})
						:
						<EmptyContainer>
							<h1>No Order</h1>
						</EmptyContainer>

				}
			</OrderPath>
		);
	}
}

const stateProps = createStructuredSelector({
	order: pullDetail,
	invoice: pullSellerInvoice
});

export default connect(stateProps)(OrderContainer);
