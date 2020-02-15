import React from 'react';
import { Link } from 'react-router-dom';
import OnLogin from '../onlogin/onlogin';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { pullUser } from '../../../Redux/User/user-selector';
import { UserNavigation, LinkButton } from './styles';

class Navigation extends React.Component {
	render() {
		return this.props.user ? (
			<UserNavigation>
				<OnLogin></OnLogin>
			</UserNavigation>
		) : (
			<UserNavigation>
				<LinkButton to='/signin'>Login</LinkButton>
				<LinkButton to='/signup'>Sign-Up</LinkButton>
			</UserNavigation>
		);
	}
}

const stateProps = createStructuredSelector({
	user: pullUser,
});

export default connect(stateProps)(Navigation);
