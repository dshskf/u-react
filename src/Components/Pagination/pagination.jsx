import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { user_page } from '../../Redux/User/user-action';
import { pullPage, pullTotal } from '../../Redux/User/user-selector';

import { fetch_start } from '../../Redux/Product/product-action';
import { InputButton, PaginationContainer } from './styles';

export class Pagination extends Component {
	onPageHandler = (e) => {
		const { fetch_start, userPage, user_page } = this.props;
		const dataToSend = {
			userInput: userPage ? userPage.userInput : '',
			page: parseInt(e.target.value)
		};
		user_page(dataToSend);
		fetch_start(dataToSend);
	};

	limitPage = () => { };

	render() {
		return (
			<PaginationContainer>
				{
				this.props.totalItem.total.map((data) => {
					if (
						data >= this.props.userPage.page - 2 &&
						data <= this.props.userPage.page + 2 &&
						this.props.userPage.page - 2 > 0
					) {
						return (
							<InputButton
								type='submit'
								value={data}
								isSelected={
									data === this.props.userPage.page
										? true
										: false
								}
								onClick={this.onPageHandler}
							/>
						);
					} else if (
						this.props.userPage.page - 2 <= 0 &&
						data > 0 &&
						data <= 5
					) {
						return (
							<InputButton
								type='submit'
								value={data}
								isSelected={
									data === this.props.userPage.page
										? true
										: false
								}
								onClick={this.onPageHandler}
							/>
						);
					}
				})}
			</PaginationContainer>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	userPage: pullPage,
	totalItem: pullTotal
});

const mapDispatchToProps = (dispatch) => ({
	user_page: (page) => dispatch(user_page(page)),
	fetch_start: (input) => dispatch(fetch_start(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
