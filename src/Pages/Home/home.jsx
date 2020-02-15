import React from 'react';
import Header from '../../Components/Header/header';
import Promo from '../../Components/Promo/promo';
import Product from '../../Components/Product/product';
import Pagination from '../../Components/Pagination/pagination';
import Footer from '../../Components/Footer/footer'

import { createStructuredSelector } from 'reselect';
import { user_page, total_document_start } from '../../Redux/User/user-action';
import { pullPage, pullTotal } from '../../Redux/User/user-selector';

import { connect } from 'react-redux';
import { fetch_start } from '../../Redux/Product/product-action';

class HomePage extends React.Component {
	componentDidMount() {
		const { fetch_start, user_page, userPage, total_document_start } = this.props;
		const dataToSend = {
			userInput: userPage ? userPage.userInput : '',
			page: userPage ? userPage.page : 1
		};
		user_page(dataToSend);
		fetch_start(dataToSend);
		total_document_start(dataToSend);
		// if (userPage) {
		// 	user_page(dataToSend);
		// 	fetch_start(dataToSend);
		// 	total_document_start(dataToSend);
		// } else {
		// 	fetch_start();
		// 	user_page("");
		// }
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Promo></Promo>
				<Product></Product>
				{
					this.props.totalItem ?
						<Pagination></Pagination>
						:
						null
				}
				<Footer></Footer>
			</div>
		);
	}
}

const stateProps = createStructuredSelector({
	userPage: pullPage,
	totalItem: pullTotal
});

const dispatchProp = (dispatch) => ({
	fetch_start: (data) => dispatch(fetch_start(data)),
	user_page: (page) => dispatch(user_page(page)),
	total_document_start: (data) => dispatch(total_document_start(data))
});

export default connect(stateProps, dispatchProp)(HomePage);
