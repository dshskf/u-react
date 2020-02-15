import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetch_start } from '../../../Redux/Product/product-action';
import { user_page, total_document_start } from '../../../Redux/User/user-action';

import { pullUser, pullPage } from '../../../Redux/User/user-selector';
import { pullData, pullError } from '../../../Redux/Cart/cart-selector';
import { fetch_cart_start } from '../../../Redux/Cart/cart-action';

import {
	SearchInput,
	SearchContainer,
	SearchBarArea,
	SubmitButton,
	CartArea,
	BagLogo,
	LinkButton,
} from './styles';

class SearchBar extends React.Component {
	state = {
		search: null,
	};

	componentDidMount() {
		const { user, fetch_cart_start, userPage } = this.props;
		this.setState({ search: userPage ? userPage.userInput : "" });
		if (user) {
			fetch_cart_start(user.id);
		}
	}

	inputHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	searchHandler = () => {
		const { fetch_start, user_page, total_document_start } = this.props;
		const dataToSend = {
			userInput: this.state.search,
			page: 1,
		};
		user_page(dataToSend);
		fetch_start(dataToSend);
		total_document_start(dataToSend);
	};

	keyDownHandler = (e) => {
		if (e.key === 'Enter') {
			this.searchHandler();
		}
	};

	countCart = (product) => {
		let count = 0;
		if (product) {
			product.map((data) => {
				data.productData.map((item) => {
					if (item) {
						count += 1;
					}
				});
			});
		}
		return count || 0;
	};

	render() {
		return (
			<SearchContainer>
				<SearchBarArea>
					<SearchInput
						type='text'
						name='search'
						placeholder='Search Product'
						onChange={this.inputHandler}
						onKeyDown={this.keyDownHandler}
						value={this.state.search || ''}
					/>
					<SubmitButton
						type='submit'
						value='Search'
						onClick={this.searchHandler}
					/>
					{
						this.props.error ?
							null
							:
							<CartArea>
								{this.props.cart ? (
									<LinkButton to='/cart'>{this.countCart(this.props.cart.cart.products)}</LinkButton>
								) : null}

								<LinkButton to='/cart' logo>
									<BagLogo></BagLogo>
								</LinkButton>
							</CartArea>

					}
				</SearchBarArea>
			</SearchContainer>
		);
	}
}

const stateProps = createStructuredSelector({
	user: pullUser,
	userPage: pullPage,
	cart: pullData,
	error: pullError
});

const dispatchProps = (dispatch) => ({
	fetch_start: (userInput) => dispatch(fetch_start(userInput)),
	fetch_cart_start: (userId) => dispatch(fetch_cart_start({ userId })),
	user_page: (userPage) => dispatch(user_page(userPage)),
	total_document_start: (data) => dispatch(total_document_start(data)),
});

export default connect(stateProps, dispatchProps)(SearchBar);
