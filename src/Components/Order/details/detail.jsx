import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { pullSellerInvoice } from '../../../Redux/Product/product-selector'
import { pullDetail } from '../../../Redux/Order/order-selector';
import { pullUser } from '../../../Redux/User/user-selector';

import Address from './address/address';
import Product from './product/product';
import Total from './total/total';
import Submit from './submit/submit';

import { OrderDetails, OrderMask } from './styles';

export class OrderDetail extends Component {
	render() {
		const { data, show, sellerPage } = this.props;
		return (

			<OrderMask onClick={this.maskHandler}>
				<OrderDetails>
					{
						this.props.order ?
							<Address {...this.props.order.user} />
							:
							<h1>Waiting...</h1>
					}
					<Product product={sellerPage ? [data.products] : data.products} />
					<Total product={data} />
					<Submit show={show} />
				</OrderDetails>
			</OrderMask>

		);
	}
}

const stateProps = createStructuredSelector({
	order: pullDetail,
	user: pullUser,
	invoice: pullSellerInvoice
});


export default connect(stateProps)(OrderDetail);
