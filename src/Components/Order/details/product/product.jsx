import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OrderItem, OrderProduct } from './styles';

export class Product extends Component {
	render() {
		const { product } = this.props;
		console.log(product)
		return (
			<OrderProduct>
				{
					product.map((seller) => {
						if (seller) {
							return seller.productData.map((item, index) => {
								if (item) {
									return (
										<OrderItem key={index}>
											<img src={'http://localhost:9000/' + item.productImg} alt="" />
											<p>{item.name}</p>
											<p>Rp {item.price}</p>
											<p>{item.qty}</p>
										</OrderItem>
									);
								}
							});
						}
					})
				}
			</OrderProduct>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
