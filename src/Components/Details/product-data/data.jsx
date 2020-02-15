import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { add_cart_start } from '../../../Redux/Cart/cart-action';
import { pullError } from '../../../Redux/Cart/cart-selector'
import { pullDetails } from '../../../Redux/Product/product-selector';
import Variants from './Variant/variant';
import ErrorBox from '../../Error-box/error'

import { pullUser } from '../../../Redux/User/user-selector';
import {
	ProductContainer,
	SubProduct,
	DataImage,
	Input,
	Buy,
	CartContainer,
	InputNumber,
	SubPart,
} from './styles';

class ProductData extends React.Component {
	state = {
		variant: null,
		qty: 1,
	};

	postAddToCart = () => {
		const {
			add_cart_start,
			prodId,
			product: { products, seller },
			user,
		} = this.props;

		const dataToParse = {
			userId: user.id,
			productId: prodId,
			sellerId: seller._id,
			sellerName: seller.username,
			name: products.name,
			variant: this.state.variant,
			price: products.price,
			qty: parseInt(this.state.qty) || 1,
			imgPath: products.productImg[0],
		};
		add_cart_start(dataToParse);
	};

	inputHandler = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	choosenVariant = e => {
		this.setState({
			variant: e.target.value
		})
	}

	render() {
		const {
			product: { products },
		} = this.props;
		return (
			<ProductContainer>
				<DataImage>
					<img src={`http://localhost:9000/${products.productImg[0]}`} />
				</DataImage>

				<SubProduct isErr={this.props.error ? true : false}>
					<SubPart>
						<h1>{products.name}</h1>
						<h2>Rp {products.price}</h2>
					</SubPart>
					<SubPart>
						<Variants arrVar={products.variant} selected={this.choosenVariant} ></Variants>
					</SubPart>
					{
						this.props.error ?
							<ErrorBox errMsg={this.props.error.err}></ErrorBox>
							:
							null
					}
					<SubPart>
						<label>Qty :</label>
						<InputNumber
							type='number'
							name='qty'
							min='1'
							max='999'
							onChange={this.inputHandler}
							value={this.state.qty}
						/>
					</SubPart>
					<SubPart>
						<Buy>
							<Input type='submit' value='BUY' />
						</Buy>
						<CartContainer>
							<Input
								type='submit'
								onClick={this.postAddToCart}
								value='ADD TO CART'
								addCart
							/>
						</CartContainer>
					</SubPart>
				</SubProduct>
			</ProductContainer>
		);
	}
}

const stateProps = createStructuredSelector({
	product: pullDetails,
	user: pullUser,
	error: pullError
});

const dispatchProps = (dispatch) => ({
	add_cart_start: (collection) => dispatch(add_cart_start({ collection })),
});

export default connect(stateProps, dispatchProps)(ProductData);
