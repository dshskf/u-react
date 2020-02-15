import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Product from './Product/product';
import Seller from './Seller/seller';
import SubmitCart from './Submit/submit';
import {
	onUpdateCart,
	onSubmitCart,
	post_cart_start,
	clear_price,
} from '../../../Redux/Cart/cart-action';
import { pullData, pullPostData } from '../../../Redux/Cart/cart-selector';
import { CartList, CartContainerStyle } from './styles';

class CartContainer extends React.Component {

	state = {
		totalArr: []
	}

	valueTemp = {
		product: [],
		productChild: [],
		onCheckPrice: []
	};

	componentDidMount() {
		const { clear_price } = this.props
		this.setTotalArr()
		clear_price();
	}

	setTotalArr = () => {
		let { cartData: { cart } } = this.props
		let prevValue = this.state.totalArr

		cart.products.map((data, index) => {
			this.state.totalArr.push(0)
			data.productData.map(item => {
				prevValue[index] += item.qty * item.price
			})
		})

		this.setState({
			totalArr: prevValue
		})
	}

	onCheckItem = (e) => {
		let {
			cartData: { cart },
			onSubmitCart,
			clear_price,
		} = this.props;
		const { name, id } = e.target;

		if (e.target.checked === true) {
			this.valueTemp.productChild[name][id] = cart.products[name].productData[id];
			this.valueTemp.product[name] = {
				productData: this.valueTemp.productChild[name],
				sellerId: cart.products[name].sellerId,
				sellerName: cart.products[name].sellerName,
			};
		} else {
			this.valueTemp.product[name].productData[id] = null;
			this.valueTemp.onCheckPrice[name] = null;
		}
		clear_price();
		this.updateTotal();
		this.updatePrice()

		const dataToParse = {
			userId: cart.userID,
			products: this.valueTemp.product,
			total: this.valueTemp.onCheckPrice,
		};
		console.log(dataToParse)
		onSubmitCart(dataToParse);
		return;
	};


	deleteItem = (e) => {
		const { clear_price } = this.props;
		const { name, id } = e.target;
		const { totalArr } = this.state
		const {
			cartData: { cart, users },
			onUpdateCart,
			onSubmitCart,
			postCart,
		} = this.props;
		cart.products[name].productData[id] = null;

		if (postCart && postCart.products[name]) {
			postCart.products[name].productData[id] = null;
			onSubmitCart(postCart);
			this.updateTotal();
		}

		onUpdateCart({ cart, users, totalArr });
		clear_price();
		this.updatePrice();
		return;
	};

	updateTotal = () => {
		let countPrice = 0;
		this.valueTemp.product.map((data, index) => {
			if (data) {
				data.productData.map((item) => {
					if (item) {
						countPrice += item.price * item.qty;
					}
				});
				this.valueTemp.onCheckPrice[index] = countPrice;
				countPrice = 0;
			}
		});
		return;
	};

	updatePrice = () => {
		let {
			cartData: { cart, users },
			onUpdateCart,
			post_cart_start,
		} = this.props;

		let totalPrice = [];
		let priceCount = 0;

		cart.products.map((data) => {
			data.productData.map((item) => {
				if (item) {
					priceCount += item.price * item.qty;
				}
			});
			totalPrice.push(priceCount);
			priceCount = 0;
		});

		this.valueTemp.total = totalPrice;
		this.setState({
			totalArr: totalPrice
		})

		onUpdateCart({ cart, users, totalPrice });
		post_cart_start({ cart, users });
		return;
	};


	render() {
		const {
			cartData: { cart },
		} = this.props;
		return (
			<CartContainerStyle>
				{
					console.log(this.props.postCart)
				}
				{
					cart.products.map((data, indexNum) => {
						this.valueTemp.productChild.push([]);
						return data.productData.every((element) => element === null) ?
							null
							:
							(
								<CartList key={indexNum}>
									<Seller seller={data}></Seller>
									{
										data.productData.map((item, index) => {
											if (item) {
												return (
													<Product
														key={index}
														indexPosition={index}
														index={indexNum}
														checkItem={this.onCheckItem}
														deleteItem={this.deleteItem}
														{...item}
													/>
												);
											}
										})
									}
									<SubmitCart totalPrice={
										this.props.postCart ?
											this.props.postCart.total[indexNum]
											:
											0
									}></SubmitCart>


								</CartList>
							);
					})}
			</CartContainerStyle>
		);
	}
}

const stateProps = createStructuredSelector({
	cartData: pullData,
	postCart: pullPostData,
});

const dispatchProps = (dispatch) => ({
	onUpdateCart: (data) => dispatch(onUpdateCart(data)),
	onSubmitCart: (data) => dispatch(onSubmitCart(data)),
	post_cart_start: (data) => dispatch(post_cart_start(data)),
	clear_price: () => dispatch(clear_price()),
});

export default connect(stateProps, dispatchProps)(CartContainer);
