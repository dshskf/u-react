import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetch_start } from '../../Redux/Product/product-action';
import { user_page } from '../../Redux/User/user-action';

import SearchBar from './Search/search';
import Navigation from './Navigation/navigation';

import { NavigationBar, NavigationTitle, LinkButton } from './styles';

class Header extends React.Component {
	homeClick = () => {
		const { fetch_start, user_page } = this.props;
		const pageToParse = {
			userInput: '',
			page: 1,
		};
		user_page(pageToParse);
		fetch_start();
	};

	render() {
		return (
			<NavigationBar>
				<NavigationTitle>
					<LinkButton to='/' onClick={this.homeClick}>U-Store</LinkButton>
				</NavigationTitle>
				<SearchBar></SearchBar>
				<Navigation></Navigation>
			</NavigationBar>
		);
	}
}

const dispatchProps = (dispatch) => ({
	fetch_start: () => dispatch(fetch_start()),
	user_page: (page) => dispatch(user_page(page)),
});

export default connect(null, dispatchProps)(Header);
