import React from 'react';
import Courier from './Courier/courier';
import Detail from './Detail/detail';
import Price from './Price/price';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
	get_courier_start,
	clear_price,
	post_pay_start,
} from '../../../Redux/Cart/cart-action';
import {
	pullData,
	pullPostData,
	pullCourierCost,
} from '../../../Redux/Cart/cart-selector';

import {
	DetailContainer,
	BuyDetail,
	PostButton,
	LinkButton,
	HeadText,
	Input,
} from './styles';

class CartDetail extends React.Component {
	state = {
		totalPrice: 0,
		courier: null,
		mountPrice: false,
		updateShipment: false
	};

	componentDidMount() {
		// const { clear_price } = this.props
		// clear_price();
		// this.setState({
		// 	totalPrice: 0,
		// 	courier: null,
		// 	mountPrice: true
		// })
	}

	calculatePrice = (price) => {
		let total = 0;
		if (price) {
			price.map((data) => {
				total += data;
			});
		}
		return total;
	};

	courierHandler = (e) => {
		const { postData, get_courier_start, clear_price } = this.props;
		let sellerId = [];

		if (!postData) {
			return;
		}
		postData.products.map((data) => {
			if (data && !data.productData.every((index) => index === null)) {
				sellerId.push(data.sellerId);
			}
		});
		clear_price();
		this.setState({ totalPrice: 0, courier: e.target.value });

		sellerId.map((data) => {
			const courierToPost = {
				userId: postData.userId,
				destination_id: data,
				cargo: e.target.value,
			};
			get_courier_start(courierToPost);
		});
	};

	updatePrice = (price) => {
		this.state.totalPrice += parseInt(price);
		this.setState({ updateShipment: false })
	};

	postCart = () => {
		const { postData, post_pay_start } = this.props;
		let total = 0;

		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 4);

		postData.total.map((price) => {
			total += price;
		});
		const dataToParse = {
			...postData,
			shipmentCost: this.state.totalPrice,
			courier: this.state.courier,
			orderDate: new Date(),
			expiredDate: expiryDate,
			status: 'Order',
			totals: total,
		};
		post_pay_start(dataToParse);
	};

	render() {
		const {
			cartData: { users },
			postData,
		} = this.props;
		return (
			<DetailContainer>
				<BuyDetail>
					<HeadText>Details</HeadText>
					<Detail {...users}></Detail>
					{
						this.props.courierCost && this.state.updateShipment ?
							this.updatePrice(this.props.courierCost.cost[0].value)
							:
							null
					}
					<Courier
						handler={this.courierHandler}
						courier={
							this.props.courierCost ? this.state.totalPrice : 0
						}></Courier>

					<Price
						total={postData ? this.calculatePrice(postData.total) : 0}
						courier={
							this.props.courierCost ? this.state.totalPrice : 0
						}></Price>

					<PostButton>
						<LinkButton to='/'>Back to home</LinkButton>
						<Input type='submit' value='Pay Now' onClick={this.postCart} />
					</PostButton>
				</BuyDetail>


			</DetailContainer>
		);
	}
}

const stateProps = createStructuredSelector({
	cartData: pullData,
	postData: pullPostData,
	courierCost: pullCourierCost,
});

const dispatchProps = (dispatch) => ({
	get_courier_start: (location) => dispatch(get_courier_start(location)),
	post_pay_start: (userCart) => dispatch(post_pay_start(userCart)),
	clear_price: () => dispatch(clear_price()),
});

export default connect(stateProps, dispatchProps)(CartDetail);
